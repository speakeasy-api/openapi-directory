// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
)

type ChecksRerequestSuiteRequest struct {
	// The unique identifier of the check suite.
	CheckSuiteID int64 `pathParam:"style=simple,explode=false,name=check_suite_id"`
	// The account owner of the repository. The name is not case sensitive.
	Owner string `pathParam:"style=simple,explode=false,name=owner"`
	// The name of the repository. The name is not case sensitive.
	Repo string `pathParam:"style=simple,explode=false,name=repo"`
}

type ChecksRerequestSuiteResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
	// Response
	EmptyObject map[string]interface{}
}
