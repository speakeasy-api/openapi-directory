// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
)

type DownloadFileViaToken1Request struct {
	// Range
	//
	// e.g. `bytes=0-999`
	Range *string `header:"style=simple,explode=false,name=Range"`
	// Always return `application/octet-stream` instead of specific mimetype
	GenericMimetype *bool `queryParam:"style=form,explode=true,name=generic_mimetype"`
	// Use Content-Disposition: `inline` instead of `attachment`
	Inline *bool `queryParam:"style=form,explode=true,name=inline"`
	// Download token
	Token string `pathParam:"style=simple,explode=false,name=token"`
}

type DownloadFileViaToken1Response struct {
	Body        []byte
	ContentType string
	StatusCode  int
	RawResponse *http.Response
}
