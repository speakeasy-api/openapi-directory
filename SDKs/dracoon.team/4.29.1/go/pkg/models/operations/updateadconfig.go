// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type UpdateAdConfigPathParams struct {
	// Active Directory ID
	AdID int `pathParam:"style=simple,explode=false,name=ad_id"`
}

type UpdateAdConfigHeaders struct {
	// Authentication token
	XSdsAuthToken *string `header:"style=simple,explode=false,name=X-Sds-Auth-Token"`
}

type UpdateAdConfigRequest struct {
	PathParams UpdateAdConfigPathParams
	Headers    UpdateAdConfigHeaders
	Request    shared.UpdateActiveDirectoryConfigRequest `request:"mediaType=application/json"`
}

type UpdateAdConfigResponse struct {
	// OK
	ActiveDirectoryConfig *shared.ActiveDirectoryConfig
	ContentType           string
	// Bad Request
	ErrorResponse *shared.ErrorResponse
	StatusCode    int
	RawResponse   *http.Response
}
