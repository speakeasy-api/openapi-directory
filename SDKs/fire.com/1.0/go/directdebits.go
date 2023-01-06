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

type DirectDebits struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewDirectDebits(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *DirectDebits {
	return &DirectDebits{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// ActivateMandate - Activate a direct debit mandate
// This endpoint can only be used to activate a direct debit mandate when it is in the status REJECT_REQUESTED (even if the account has direct debits disabled). This action will also enable the account for direct debits if it was previously set to be disabled.
// The permision needed to access this endpoint is PERM_BUSINESS_POST_MANDATE_ACTIVATE
func (s *DirectDebits) ActivateMandate(ctx context.Context, request operations.ActivateMandateRequest) (*operations.ActivateMandateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mandates/{mandateUuid}/activate", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ActivateMandateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	}

	return res, nil
}

// CancelMandateByUUID - Cancel a direct debit mandate
// This endpoint allows you to cancel a direct debit mandate.
// The permision needed to access this endpoint is PERM_BUSINESS_POST_MANDATE_CANCEL
func (s *DirectDebits) CancelMandateByUUID(ctx context.Context, request operations.CancelMandateByUUIDRequest) (*operations.CancelMandateByUUIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mandates/{mandateUuid}/cancel", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.CancelMandateByUUIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	}

	return res, nil
}

// GetDirectDebitByUUID - Get the deails of a direct debit
// Retrieve all details of a single direct debit collection/payment, whether successful or not.
// The permision needed to access this endpoint is **PERM_BUSINESS_GET_DIRECT_DEBIT**
func (s *DirectDebits) GetDirectDebitByUUID(ctx context.Context, request operations.GetDirectDebitByUUIDRequest) (*operations.GetDirectDebitByUUIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/directdebits/{directDebitUuid}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetDirectDebitByUUIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItems
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItems = out
		}
	}

	return res, nil
}

// GetDirectDebitMandates - List all direct debit mandates
// The permision needed to access this endpoint is PERM_BUSINESS_GET_MANDATES
func (s *DirectDebits) GetDirectDebitMandates(ctx context.Context) (*operations.GetDirectDebitMandatesResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/mandates"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetDirectDebitMandatesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.GetDirectDebitMandatesMandates
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Mandates = out
		}
	}

	return res, nil
}

// GetDirectDebitsForMandateUUID - Get all DD payments associated with a direct debit mandate
// Retrieve all direct debit payments associated with a direct debit mandate.
// The permision needed to access this endpoint is PERM_BUSINESS_GET_DIRECT_DEBITS
func (s *DirectDebits) GetDirectDebitsForMandateUUID(ctx context.Context, request operations.GetDirectDebitsForMandateUUIDRequest) (*operations.GetDirectDebitsForMandateUUIDResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/directdebits"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetDirectDebitsForMandateUUIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.GetDirectDebitsForMandateUUIDDirectDebits
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.DirectDebits = out
		}
	}

	return res, nil
}

// GetMandate - Get direct debit mandate details
// Retrieve all details for a direct debit mandate.
// The permision needed to access this endpoint is PERM_BUSINESS_GET_MANDATE
func (s *DirectDebits) GetMandate(ctx context.Context, request operations.GetMandateRequest) (*operations.GetMandateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mandates/{mandateUuid}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetMandateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.OnemandatesGetResponses200ContentApplication1jsonSchemaPropertiesMandatesItems
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.OnemandatesGetResponses200ContentApplication1jsonSchemaPropertiesMandatesItems = out
		}
	}

	return res, nil
}

// RejectDirectDebit - Reject a direct debit payment
// This endpoint allows you to reject a direct debit payment where the status is still set to RECEIVED.
// Permission name PERM_BUSINESS_POST_DIRECT_DEBIT_REJECT
func (s *DirectDebits) RejectDirectDebit(ctx context.Context, request operations.RejectDirectDebitRequest) (*operations.RejectDirectDebitResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/directdebits/{directDebitUuid}/reject", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.RejectDirectDebitResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	}

	return res, nil
}

// UpdateMandateAlias - Update a direct debit mandate alias
// Update Direct Debit Mandate Alias
// The permision needed to access this endpoint is PERM_BUSINESS_PUT_MANDATE
func (s *DirectDebits) UpdateMandateAlias(ctx context.Context, request operations.UpdateMandateAliasRequest) (*operations.UpdateMandateAliasResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mandates/{mandateUuid}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.UpdateMandateAliasResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	}

	return res, nil
}
