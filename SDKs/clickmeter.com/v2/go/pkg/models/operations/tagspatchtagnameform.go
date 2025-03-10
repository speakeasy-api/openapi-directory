// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type TagsPatchTagNameFormRequest struct {
	// The body patch
	APICoreRequestsGenericTextPatch shared.APICoreRequestsGenericTextPatch `request:"mediaType=application/x-www-form-urlencoded"`
	// Id of the tag
	TagID int64 `pathParam:"style=simple,explode=false,name=tagId"`
}

type TagsPatchTagNameFormResponse struct {
	APICoreResponsesEntityURISystemInt64 *shared.APICoreResponsesEntityURISystemInt64
	Body                                 []byte
	ContentType                          string
	StatusCode                           int
	RawResponse                          *http.Response
}
