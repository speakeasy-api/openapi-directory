// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type GitignoreGetTemplateRequest struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type GitignoreGetTemplateResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
	// Response
	GitignoreTemplate *shared.GitignoreTemplate
}
