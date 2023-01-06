package sdk

import (
	"context"
	"fmt"
	"io"
	"net/http"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/utils"
	"strings"
)

type Resources struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewResources(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Resources {
	return &Resources{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// AddFolder - Create a folder
// Create a new empty folder at the specified path. New files can be uploaded via the [/resources/upload](#operation/uploadFile) endpoint.
//
// **Notes:**
// - Authenticated user should have modify permission.
func (s *Resources) AddFolder(ctx context.Context, request operations.AddFolderRequest) (*operations.AddFolderResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/resources"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.AddFolderResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ResourceResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ResourceResponse = out
		}
	}

	return res, nil
}

// CompressFiles - Compress resources
// Create a zip archive containing the files from given set of paths. Note that this can be a very slow operation if you have indicated many files should be included in the archive.
//
// **Notes:**
// - Authenticated user should have modify permission.
func (s *Resources) CompressFiles(ctx context.Context, request operations.CompressFilesRequest) (*operations.CompressFilesResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/resources/compress"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.CompressFilesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ResourceResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ResourceResponse = out
		}
	}

	return res, nil
}

// CopyResources - Copy resources
// Copies a set of exisiting files/folders (provided by an array `resources`) to the requested `parentResource` in your account.
// In the `resources` array, you may specify paths pointing files/folders throughout the account, but everything will be copied to the
// root of the `parentResource`.
//
// **Notes:**
// - Authenticated user should have modify permission.
func (s *Resources) CopyResources(ctx context.Context, request operations.CopyResourcesRequest) (*operations.CopyResourcesResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/resources/copy"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.CopyResourcesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ResourceCopyMove
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ResourceCopyMove = out
		}
	case httpRes.StatusCode == 207:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ResourceMultiResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ResourceMultiResponse = out
		}
	}

	return res, nil
}

// DeleteResourceByID - Delete a Resource
// Delete a single file or folder resource. Deleting a folder will also delete all of the contents.
//
// **Notes:**
// - Authenticated user should have [delete permission](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions).
// - There is no way to un-delete a deleted resource.
func (s *Resources) DeleteResourceByID(ctx context.Context, request operations.DeleteResourceByIDRequest) (*operations.DeleteResourceByIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/resources/{id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DeleteResourceByIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.EmptyResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.EmptyResponse = out
		}
	}

	return res, nil
}

// DeleteResources - Delete Resources
// Delete multiple file or folder resourcess. Deleting a folder resource will also delete any resources in that folder.
//
// **Notes:**
// - Authenticated user should have [delete permission](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions).
// - It is not possible to un-delete a deleted resource.
func (s *Resources) DeleteResources(ctx context.Context, request operations.DeleteResourcesRequest) (*operations.DeleteResourcesResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/resources"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DeleteResourcesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.EmptyResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.EmptyResponse = out
		}
	case httpRes.StatusCode == 207:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ResourceMultiResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ResourceMultiResponse = out
		}
	}

	return res, nil
}

// Download - Download a file
// Downloads a file from the server. Whenever more than one file is being downloaded, the file are first zipped into  a single file before the download starts, and the resulting zip file is named to match the `downloadArchiveName` parameter.
//
// **NOTE**: Downloading many files at once  may result in a long delay before the API will return a response. You may need to override default timeout values in your API client, or download files individually.
func (s *Resources) Download(ctx context.Context, request operations.DownloadRequest) (*operations.DownloadResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/resources/download"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DownloadResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/octet-stream`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Download200ApplicationOctetStreamBinaryString = out
		case utils.MatchContentType(contentType, `application/zip`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Download200ApplicationZipBinaryString = out
		}
	}

	return res, nil
}

// ExtractFiles - Extract resources
// Extract the contents of a zip archive to a specified directory. Note that this can be a very slow operation.
//
// **Notes:**
// - You must have  [modify permission](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions) to do this.
func (s *Resources) ExtractFiles(ctx context.Context, request operations.ExtractFilesRequest) (*operations.ExtractFilesResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/resources/extract"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ExtractFilesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ResourceCollectionResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ResourceCollectionResponse = out
		}
	}

	return res, nil
}

// GetPreviewImage - Preview a file
// Returns a resized image of the specified document for supported file types.
//
// Image data returned is encoded in base64 format and can be viewed using the `<img>` element.
//
// ```<img src='data:image/jpeg;base64' + meta.image/>```
//
// **Notes:**
// - Supported files types are `'jpg'`, `'jpeg'`, `'gif'`, `'png'`, `'bmp'`, `'pdf'`, `'psd'`, `'doc'`
func (s *Resources) GetPreviewImage(ctx context.Context, request operations.GetPreviewImageRequest) (*operations.GetPreviewImageResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/resources/preview"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetPreviewImageResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.PreviewFileResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PreviewFileResponse = out
		}
	}

	return res, nil
}

// GetResourceInfo - Get Resource Properties
// Returns details for specified file/folder id or hash, including upload date, size and type. For the full list of returned properties, see the response syntax, below.
//
// **Notes:**
// - Authenticated user should have list permission.
func (s *Resources) GetResourceInfo(ctx context.Context, request operations.GetResourceInfoRequest) (*operations.GetResourceInfoResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/resources"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetResourceInfoResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ResourceResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ResourceResponse = out
		}
	}

	return res, nil
}

// GetResourceInfoByID - Get resource metadata
// Returns metadata for specified file/folder path, including upload date, size and type. For the full list of returned properties, see the response syntax, below.
//
// **Notes:**
// - Authenticated user should have list permission.
func (s *Resources) GetResourceInfoByID(ctx context.Context, request operations.GetResourceInfoByIDRequest) (*operations.GetResourceInfoByIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/resources/{id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetResourceInfoByIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ResourceResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ResourceResponse = out
		}
	}

	return res, nil
}

// ListResourceContents - List contents of folder
// Returns a list of files/folders for the parent resource ID.
//
// You can use this API call to get information about all files and folders at a specified path. By default, the API returns basic metadata on each file/folder. An optional `include` parameter forces the return of additional metadata. As with all API calls, the path should be the full path relative to the user's home directory (e.g. **/myfiles/some_folder**).
//
// **Notes:**
// - Authenticated user should have list permission.
func (s *Resources) ListResourceContents(ctx context.Context, request operations.ListResourceContentsRequest) (*operations.ListResourceContentsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/resources/list/{id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ListResourceContentsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ResourceCollectionResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ResourceCollectionResponse = out
		}
	}

	return res, nil
}

// ListResources - Get a list of all resources
// Returns a list of files and folders in the account. Use the `resource` query parameter to indicate the folder you wish to search in (which can be /).
//
// **Searching for Files and Folders**
//
// Using the `name` parameter triggers search mode, which will search the entire directory structure under the provided `resource` for files or folders with names matching the provided `name`. This supports wildcard matching such as:
//
// - \*Report\* would find any files or folders with "Report" in the name.
// - Data\_202?-09-30.xlsx would match items such as "Data\_2020-09-30.xlsx", "DATA\_2021-09-30.xlsx", "data\_2022-09-30.xlsx" etc.
// - sales\* would find any files or folders starting with the word "Sales"
// - \*.csv would locate any files ending in ".csv"
// - \* matches everything within the directory tree starting at your given `resource`
//
// The search is not case-sensitive. Searching for Clients\* or clients\* or CLIENTS\*, etc. will provide identical results
//
// If you are using the `name` parameter to run a search, the `type` parameter will be ignored by the server.
func (s *Resources) ListResources(ctx context.Context, request operations.ListResourcesRequest) (*operations.ListResourcesResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/resources/list"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ListResourcesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ResourceCollectionResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ResourceCollectionResponse = out
		}
	}

	return res, nil
}

// MoveResources - Move resources
// Moves a set of exisiting files/folders (provided by an array `resources`) to the requested `parentResource` in your account.
// In the `resources` array, you may specify paths pointing files/folders throughout the account, but everything will be moved to the root of the `parentResource`.
//
// **Notes:**
// - Authenticated user should have modify permission.
func (s *Resources) MoveResources(ctx context.Context, request operations.MoveResourcesRequest) (*operations.MoveResourcesResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/resources/move"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.MoveResourcesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ResourceCopyMove
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ResourceCopyMove = out
		}
	case httpRes.StatusCode == 207:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ResourceMultiResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ResourceMultiResponse = out
		}
	}

	return res, nil
}

// UpdateResourceByID - Rename a resource.
// Update the specified file or folder resource record's "name" parameter. The resource is identified by the numeric resource ID that is passed in as the last segment of the URI.
func (s *Resources) UpdateResourceByID(ctx context.Context, request operations.UpdateResourceByIDRequest) (*operations.UpdateResourceByIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/resources/{id}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "PATCH", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.UpdateResourceByIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ResourceResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ResourceResponse = out
		}
	}

	return res, nil
}

// UploadFile - Upload a file
// Uploads a file to a specified path, with optional support for resuming a partially uploaded existing file.
func (s *Resources) UploadFile(ctx context.Context, request operations.UploadFileRequest) (*operations.UploadFileResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/resources/upload"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateHeaders(ctx, req, request.Headers)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.UploadFileResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ResourceResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ResourceResponse = out
		}
	}

	return res, nil
}
