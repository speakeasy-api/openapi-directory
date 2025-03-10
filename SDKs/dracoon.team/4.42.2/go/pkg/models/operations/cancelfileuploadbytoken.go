// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type CancelFileUploadByTokenRequest struct {
	// Upload token
	Token string `pathParam:"style=simple,explode=false,name=token"`
}

type CancelFileUploadByTokenResponse struct {
	ContentType string
	// Bad Request
	ErrorResponse *shared.ErrorResponse
	StatusCode    int
	RawResponse   *http.Response
}
