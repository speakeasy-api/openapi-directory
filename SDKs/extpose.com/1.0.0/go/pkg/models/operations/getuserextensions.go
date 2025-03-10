// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type GetUserExtensionsSecurity struct {
	APIKey string `security:"scheme,type=apiKey,subtype=header,name=X-API-Key"`
}

type GetUserExtensionsResponse struct {
	ContentType string
	// successful operation
	Extensions  []shared.Extension
	StatusCode  int
	RawResponse *http.Response
}
