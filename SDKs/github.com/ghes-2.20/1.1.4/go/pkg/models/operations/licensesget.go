// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type LicensesGetRequest struct {
	License string `pathParam:"style=simple,explode=false,name=license"`
}

type LicensesGetResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
	// Forbidden
	BasicError *shared.BasicError
	// Response
	License *shared.License
}
