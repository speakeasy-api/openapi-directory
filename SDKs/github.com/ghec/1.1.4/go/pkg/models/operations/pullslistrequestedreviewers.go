// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type PullsListRequestedReviewersRequest struct {
	// The account owner of the repository. The name is not case sensitive.
	Owner string `pathParam:"style=simple,explode=false,name=owner"`
	// The number that identifies the pull request.
	PullNumber int64 `pathParam:"style=simple,explode=false,name=pull_number"`
	// The name of the repository. The name is not case sensitive.
	Repo string `pathParam:"style=simple,explode=false,name=repo"`
}

type PullsListRequestedReviewersResponse struct {
	ContentType string
	Headers     map[string][]string
	StatusCode  int
	RawResponse *http.Response
	// Response
	PullRequestReviewRequest *shared.PullRequestReviewRequest
}
