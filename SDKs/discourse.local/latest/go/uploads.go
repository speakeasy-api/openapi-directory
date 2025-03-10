// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/pkg/models/operations"
	"openapi/pkg/utils"
	"strings"
)

type uploads struct {
	defaultClient  HTTPClient
	securityClient HTTPClient
	serverURL      string
	language       string
	sdkVersion     string
	genVersion     string
}

func newUploads(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *uploads {
	return &uploads{
		defaultClient:  defaultClient,
		securityClient: securityClient,
		serverURL:      serverURL,
		language:       language,
		sdkVersion:     sdkVersion,
		genVersion:     genVersion,
	}
}

// AbortMultipart - Abort multipart upload
// This endpoint aborts the multipart upload initiated with /create-multipart.
// This should be used when cancelling the upload. It does not matter if parts
// were already uploaded into the external storage provider.
//
// You must have the correct permissions and CORS settings configured in your
// external provider. We support AWS S3 as the default. See:
//
// https://meta.discourse.org/t/-/210469#s3-multipart-direct-uploads-4.
//
// An external file store must be set up and `enable_direct_s3_uploads` must
// be set to true for this endpoint to function.
func (s *uploads) AbortMultipart(ctx context.Context, request operations.AbortMultipartRequestBody) (*operations.AbortMultipartResponse, error) {
	baseURL := s.serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/uploads/abort-multipart.json"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request, "Request", "json")
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s.defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	if httpRes == nil {
		return nil, fmt.Errorf("error sending request: no response")
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.AbortMultipartResponse{
		StatusCode:  httpRes.StatusCode,
		ContentType: contentType,
		RawResponse: httpRes,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.AbortMultipart200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.AbortMultipart200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// BatchPresignMultipartParts - Generates batches of presigned URLs for multipart parts
// Multipart uploads are uploaded in chunks or parts to individual presigned
// URLs, similar to the one generated by /generate-presigned-put. The part
// numbers provided must be between 1 and 10000. The total number of parts
// will depend on the chunk size in bytes that you intend to use to upload
// each chunk. For example a 12MB file may have 2 5MB chunks and a final
// 2MB chunk, for part numbers 1, 2, and 3.
//
// This endpoint will return a presigned URL for each part number provided,
// which you can then use to send PUT requests for the binary chunk corresponding
// to that part. When the part is uploaded, the provider should return an
// ETag for the part, and this should be stored along with the part number,
// because this is needed to complete the multipart upload.
//
// You must have the correct permissions and CORS settings configured in your
// external provider. We support AWS S3 as the default. See:
//
// https://meta.discourse.org/t/-/210469#s3-multipart-direct-uploads-4.
//
// An external file store must be set up and `enable_direct_s3_uploads` must
// be set to true for this endpoint to function.
func (s *uploads) BatchPresignMultipartParts(ctx context.Context, request operations.BatchPresignMultipartPartsRequestBody) (*operations.BatchPresignMultipartPartsResponse, error) {
	baseURL := s.serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/uploads/batch-presign-multipart-parts.json"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request, "Request", "json")
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s.defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	if httpRes == nil {
		return nil, fmt.Errorf("error sending request: no response")
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.BatchPresignMultipartPartsResponse{
		StatusCode:  httpRes.StatusCode,
		ContentType: contentType,
		RawResponse: httpRes,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.BatchPresignMultipartParts200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BatchPresignMultipartParts200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// CompleteExternalUpload - Completes a direct external upload
// Completes an external upload initialized with /get-presigned-put. The
// file will be moved from its temporary location in external storage to
// a final destination in the S3 bucket. An Upload record will also be
// created in the database in most cases.
//
// If a sha1-checksum was provided in the initial request it will also
// be compared with the uploaded file in storage to make sure the same
// file was uploaded. The file size will be compared for the same reason.
//
// You must have the correct permissions and CORS settings configured in your
// external provider. We support AWS S3 as the default. See:
//
// https://meta.discourse.org/t/-/210469#s3-multipart-direct-uploads-4.
//
// An external file store must be set up and `enable_direct_s3_uploads` must
// be set to true for this endpoint to function.
func (s *uploads) CompleteExternalUpload(ctx context.Context, request operations.CompleteExternalUploadRequestBody) (*operations.CompleteExternalUploadResponse, error) {
	baseURL := s.serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/uploads/complete-external-upload.json"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request, "Request", "json")
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s.defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	if httpRes == nil {
		return nil, fmt.Errorf("error sending request: no response")
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.CompleteExternalUploadResponse{
		StatusCode:  httpRes.StatusCode,
		ContentType: contentType,
		RawResponse: httpRes,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.CompleteExternalUpload200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CompleteExternalUpload200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// CompleteMultipart - Complete multipart upload
// Completes the multipart upload in the external store, and copies the
// file from its temporary location to its final location in the store.
// All of the parts must have been uploaded to the external storage provider.
// An Upload record will be completed in most cases once the file is copied
// to its final location.
//
// You must have the correct permissions and CORS settings configured in your
// external provider. We support AWS S3 as the default. See:
//
// https://meta.discourse.org/t/-/210469#s3-multipart-direct-uploads-4.
//
// An external file store must be set up and `enable_direct_s3_uploads` must
// be set to true for this endpoint to function.
func (s *uploads) CompleteMultipart(ctx context.Context, request operations.CompleteMultipartRequestBody) (*operations.CompleteMultipartResponse, error) {
	baseURL := s.serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/uploads/complete-multipart.json"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request, "Request", "json")
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s.defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	if httpRes == nil {
		return nil, fmt.Errorf("error sending request: no response")
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.CompleteMultipartResponse{
		StatusCode:  httpRes.StatusCode,
		ContentType: contentType,
		RawResponse: httpRes,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.CompleteMultipart200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CompleteMultipart200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// CreateMultipartUpload - Creates a multipart external upload
// Creates a multipart upload in the external storage provider, storing
// a temporary reference to the external upload similar to /get-presigned-put.
//
// You must have the correct permissions and CORS settings configured in your
// external provider. We support AWS S3 as the default. See:
//
// https://meta.discourse.org/t/-/210469#s3-multipart-direct-uploads-4.
//
// An external file store must be set up and `enable_direct_s3_uploads` must
// be set to true for this endpoint to function.
func (s *uploads) CreateMultipartUpload(ctx context.Context, request operations.CreateMultipartUploadRequestBody) (*operations.CreateMultipartUploadResponse, error) {
	baseURL := s.serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/uploads/create-multipart.json"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request, "Request", "json")
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s.defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	if httpRes == nil {
		return nil, fmt.Errorf("error sending request: no response")
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.CreateMultipartUploadResponse{
		StatusCode:  httpRes.StatusCode,
		ContentType: contentType,
		RawResponse: httpRes,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.CreateMultipartUpload200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CreateMultipartUpload200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// CreateUpload - Creates an upload
func (s *uploads) CreateUpload(ctx context.Context, request operations.CreateUploadRequestBody) (*operations.CreateUploadResponse, error) {
	baseURL := s.serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/uploads.json"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request, "Request", "multipart")
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s.defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	if httpRes == nil {
		return nil, fmt.Errorf("error sending request: no response")
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.CreateUploadResponse{
		StatusCode:  httpRes.StatusCode,
		ContentType: contentType,
		RawResponse: httpRes,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.CreateUpload200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CreateUpload200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// GeneratePresignedPut - Initiates a direct external upload
// Direct external uploads bypass the usual method of creating uploads
// via the POST /uploads route, and upload directly to an external provider,
// which by default is S3. This route begins the process, and will return
// a unique identifier for the external upload as well as a presigned URL
// which is where the file binary blob should be uploaded to.
//
// Once the upload is complete to the external service, you must call the
// POST /complete-external-upload route using the unique identifier returned
// by this route, which will create any required Upload record in the Discourse
// database and also move file from its temporary location to the final
// destination in the external storage service.
//
// You must have the correct permissions and CORS settings configured in your
// external provider. We support AWS S3 as the default. See:
//
// https://meta.discourse.org/t/-/210469#s3-multipart-direct-uploads-4.
//
// An external file store must be set up and `enable_direct_s3_uploads` must
// be set to true for this endpoint to function.
func (s *uploads) GeneratePresignedPut(ctx context.Context, request operations.GeneratePresignedPutRequestBody) (*operations.GeneratePresignedPutResponse, error) {
	baseURL := s.serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/uploads/generate-presigned-put.json"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request, "Request", "json")
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s.defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	if httpRes == nil {
		return nil, fmt.Errorf("error sending request: no response")
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GeneratePresignedPutResponse{
		StatusCode:  httpRes.StatusCode,
		ContentType: contentType,
		RawResponse: httpRes,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.GeneratePresignedPut200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GeneratePresignedPut200ApplicationJSONObject = out
		}
	}

	return res, nil
}
