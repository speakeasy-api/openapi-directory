// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type ResendEmailActivationResponse struct {
	// Email activation not sent because of email problem. Ensure that your email is the correct one.
	BeezUPCommonErrorResponseMessage *shared.BeezUPCommonErrorResponseMessage
	ContentType                      string
	Headers                          map[string][]string
	StatusCode                       int
	RawResponse                      *http.Response
}
