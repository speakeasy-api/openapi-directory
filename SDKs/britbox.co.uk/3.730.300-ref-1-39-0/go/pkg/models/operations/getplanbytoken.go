// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type GetPlanByTokenRequest struct {
	// Language code for the preferred language to be returned in the response.
	//
	// Parameter value is case-insensitive and should be
	//   - a valid 2 letter language code without region such as en, de
	//   - or with region such as en_us, en_au
	//
	// If undefined then defaults to 'en', unless the server has been configured
	// with a custom default.
	//
	// See https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
	//
	Lang *string `queryParam:"style=form,explode=true,name=lang"`
	// The identifier of the user provided by BT in an initial URL.
	Token string `pathParam:"style=simple,explode=false,name=token"`
}

type GetPlanByTokenResponse struct {
	// Available plan for current user.
	BtPlanListItem *shared.BtPlanListItem
	ContentType    string
	// Bad request.
	ServiceError *shared.ServiceError
	StatusCode   int
	RawResponse  *http.Response
}
