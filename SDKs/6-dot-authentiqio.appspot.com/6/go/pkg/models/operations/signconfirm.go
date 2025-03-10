// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type SignConfirmRequest struct {
	// Job ID (20 chars)
	Job string `pathParam:"style=simple,explode=false,name=job"`
}

// SignConfirm202ApplicationJSON - Successfully confirmed
type SignConfirm202ApplicationJSON struct {
	// confirmed
	Status *string `json:"status,omitempty"`
}

type SignConfirmResponse struct {
	Body        []byte
	ContentType string
	// Confirmation error `auth-error`
	Error       *shared.Error
	StatusCode  int
	RawResponse *http.Response
	// Successfully confirmed
	SignConfirm202ApplicationJSONObject *SignConfirm202ApplicationJSON
}
