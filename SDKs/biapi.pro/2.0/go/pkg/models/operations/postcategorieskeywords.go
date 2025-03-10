// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type PostCategoriesKeywordsRequest struct {
	Expand *string `queryParam:"style=form,explode=true,name=expand"`
}

type PostCategoriesKeywordsResponse struct {
	ContentType string
	// Successful POST on Keyword resource
	Keyword     *shared.Keyword
	StatusCode  int
	RawResponse *http.Response
}
