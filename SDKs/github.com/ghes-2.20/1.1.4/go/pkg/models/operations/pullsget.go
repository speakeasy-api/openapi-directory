// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type PullsGetRequest struct {
	Owner      string `pathParam:"style=simple,explode=false,name=owner"`
	PullNumber int64  `pathParam:"style=simple,explode=false,name=pull_number"`
	Repo       string `pathParam:"style=simple,explode=false,name=repo"`
}

type PullsGetResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
	// Resource not found
	BasicError *shared.BasicError
	// Pass the appropriate [media type](https://docs.github.com/enterprise-server@2.20/rest/overview/media-types/#commits-commit-comparison-and-pull-requests) to fetch diff and patch formats.
	PullRequest *shared.PullRequest
}
