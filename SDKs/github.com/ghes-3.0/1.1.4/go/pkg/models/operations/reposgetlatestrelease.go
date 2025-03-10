// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type ReposGetLatestReleaseRequest struct {
	Owner string `pathParam:"style=simple,explode=false,name=owner"`
	Repo  string `pathParam:"style=simple,explode=false,name=repo"`
}

type ReposGetLatestReleaseResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
	// Response
	Release *shared.Release
}
