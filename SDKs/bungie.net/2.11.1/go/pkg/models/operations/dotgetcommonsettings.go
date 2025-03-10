// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

// DotGetCommonSettings200Wildcard - Look at the Response property for more information about the nature of this response
type DotGetCommonSettings200Wildcard struct {
	DetailedErrorTrace *string
	ErrorCode          *int
	ErrorStatus        *string
	Message            *string
	MessageData        map[string]string
	Response           *shared.CommonModelsCoreSettingsConfiguration
	ThrottleSeconds    *int
}

type DotGetCommonSettingsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int
	RawResponse *http.Response
}
