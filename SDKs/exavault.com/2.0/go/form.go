package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/utils"
	"strings"
)

type Form struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewForm(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Form {
	return &Form{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// DeleteFormMessageByID - Delete a receive form submission
// Deletes a form submission entry, which represents one time that a visitor filled out the form and uploaded files. This deletes only the record of the submission (the date, the values entered in the form and the names of the files uploaded by the visitor).The share and any associated file resources will not be deleted by this.
//
// **Notes**:
//
// - Use the [GET /form/entries/{formId}](#operation/getFormMessageById) to list the submissions and obtain the ID of the entry you want to delete
// - You must have the [DeleteFormData permission](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions) in order to use this operation
// - It is not possible to un-delete data that is removed in this way
func (s *Form) DeleteFormMessageByID(ctx context.Context, request operations.DeleteFormMessageByIDRequest) (*operations.DeleteFormMessageByIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/forms/entries/{id}", request.PathParams)

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

	res := &operations.DeleteFormMessageByIDResponse{
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

// GetFormByID - Get receive folder form by Id
// Returns the [file upload form](/docs/account/05-file-sharing/05-form-builder) assigned to a [receive folder](/docs/account/05-file-sharing/04-receive-folders). The form details will return all the input fields and their settings.
//
// Use the `include` parameter (with the value **share**) to also retrieve the details of the associated receive folder.
//
// **Note**
//
// If you prefer to find a form by its shareHash, you can use the [GET /forms](#operation/getFormByShareHash) endpoint instead.
func (s *Form) GetFormByID(ctx context.Context, request operations.GetFormByIDRequest) (*operations.GetFormByIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/forms/{id}", request.PathParams)

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

	res := &operations.GetFormByIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.FormResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.FormResponse = out
		}
	}

	return res, nil
}

// GetFormByShareHash - Get receive folder form settings
// Get the information for the [file upload form](/docs/account/05-file-sharing/05-form-builder) assigned to a [receive folder](/docs/account/05-file-sharing/04-receive-folders) by its shareHash. The form details will return all the input field settings and the CSS for the form.
//
// Use the `include` parameter (with the value **share**) to also get the details of the associated receive folder.
//
// **Note**
//
// - If you prefer to find a form by its ID, you can use the [GET /forms/{id}](#operation/getFormById) endpoint instead.
func (s *Form) GetFormByShareHash(ctx context.Context, request operations.GetFormByShareHashRequest) (*operations.GetFormByShareHashResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/forms"

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

	res := &operations.GetFormByShareHashResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.FormResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.FormResponse = out
		}
	}

	return res, nil
}

// GetFormEntries - Get form data entries for a receive
// Returns the form data entries for a specific form for a receive. Optional parameters can be included in the call to manage larger data sets.
func (s *Form) GetFormEntries(ctx context.Context, request operations.GetFormEntriesRequest) (*operations.GetFormEntriesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/forms/entries/{id}", request.PathParams)

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

	res := &operations.GetFormEntriesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.FormEntryResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.FormEntryResponse = out
		}
	}

	return res, nil
}

// UpdateFormByID - Updates a form with given parameters
// Add, update, or delete a form's parameters. This will alter how your users/customers will see and interact with the form when sending you files.
//
// **Notes**
//
// *This call will **replace** your current form in its entirety.* If you want to keep any existing elements unchanged, be sure to submit the call with an element's current settings to preserve them.
func (s *Form) UpdateFormByID(ctx context.Context, request operations.UpdateFormByIDRequest) (*operations.UpdateFormByIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/forms/{id}", request.PathParams)

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

	res := &operations.UpdateFormByIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.FormResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.FormResponse = out
		}
	}

	return res, nil
}
