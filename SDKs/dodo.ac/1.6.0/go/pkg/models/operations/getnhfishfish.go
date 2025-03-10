// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type GetNhFishFishRequest struct {
	// The version of the API you are calling, written as `1.0.0`. This is specified as required as good practice, but it is not actually enforced by the API. If you do not specify a version, you will be served the latest version, which may eventually result in breaking changes.
	AcceptVersion string `header:"style=simple,explode=false,name=Accept-Version"`
	// Your UUID secret key, granted to you by the Nookipedia team. Required for accessing the API.
	XAPIKey string `header:"style=simple,explode=false,name=X-API-KEY"`
	// The name of the fish you wish to retrieve information about.
	Fish string `pathParam:"style=simple,explode=false,name=fish"`
	// Specify the desired width of returned image URLs. When unspecified, the linked image(s) returned by the API will be full-resolution. Note that images can only be reduced in size; specifying a width greater than than the maximum size will return the default full-size image URL.
	Thumbsize *int64 `queryParam:"style=form,explode=true,name=thumbsize"`
}

type GetNhFishFishResponse struct {
	ContentType string
	// Failed to authenticate user from `X-API-KEY`.
	Error401 *shared.Error401
	// Could not find the specified fish.
	Error404 *shared.Error404
	// There was an error fetching the requested data.
	Error500 *shared.Error500
	// A JSON object describing the fish.
	NHFish      *shared.NHFish
	StatusCode  int
	RawResponse *http.Response
}
