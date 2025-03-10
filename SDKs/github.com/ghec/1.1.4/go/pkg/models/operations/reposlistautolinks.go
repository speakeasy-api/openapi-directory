// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type ReposListAutolinksRequest struct {
	// The account owner of the repository. The name is not case sensitive.
	Owner string `pathParam:"style=simple,explode=false,name=owner"`
	// Page number of the results to fetch.
	Page *int64 `queryParam:"style=form,explode=true,name=page"`
	// The name of the repository. The name is not case sensitive.
	Repo string `pathParam:"style=simple,explode=false,name=repo"`
}

type ReposListAutolinksResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
	// Response
	Autolinks []shared.Autolink
}
