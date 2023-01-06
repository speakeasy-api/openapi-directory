package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/utils"
)

type AuditLog struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewAuditLog(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *AuditLog {
	return &AuditLog{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// AuditLogGetAuditLog - Get the audit log for an enterprise
// **Note:** The audit log REST API is currently in beta and is subject to change.
//
// Gets the audit log for an enterprise. To use this endpoint, you must be an enterprise admin, and you must use an access token with the `admin:enterprise` scope.
// https://docs.github.com/rest/reference/enterprise-admin#get-the-audit-log-for-an-enterprise - API method documentation
func (s *AuditLog) AuditLogGetAuditLog(ctx context.Context, request operations.AuditLogGetAuditLogRequest) (*operations.AuditLogGetAuditLogResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/enterprises/{enterprise}/audit-log", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.AuditLogGetAuditLogResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.AuditLogEvent
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.AuditLogEvents = out
		}
	}

	return res, nil
}
