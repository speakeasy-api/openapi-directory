// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type ConfigureAutomaticTransitionsResponse struct {
	// Requested automatic Order status transition could not be configured
	BeezUPCommonErrorResponseMessage *shared.BeezUPCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int
	RawResponse                      *http.Response
}
