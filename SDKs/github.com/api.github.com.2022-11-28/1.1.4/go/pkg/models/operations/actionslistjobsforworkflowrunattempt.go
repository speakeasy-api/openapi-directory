// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type ActionsListJobsForWorkflowRunAttemptRequest struct {
	// The attempt number of the workflow run.
	AttemptNumber int64 `pathParam:"style=simple,explode=false,name=attempt_number"`
	// The account owner of the repository. The name is not case sensitive.
	Owner string `pathParam:"style=simple,explode=false,name=owner"`
	// Page number of the results to fetch.
	Page *int64 `queryParam:"style=form,explode=true,name=page"`
	// The number of results per page (max 100).
	PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
	// The name of the repository. The name is not case sensitive.
	Repo string `pathParam:"style=simple,explode=false,name=repo"`
	// The unique identifier of the workflow run.
	RunID int64 `pathParam:"style=simple,explode=false,name=run_id"`
}

// ActionsListJobsForWorkflowRunAttempt200ApplicationJSON - Response
type ActionsListJobsForWorkflowRunAttempt200ApplicationJSON struct {
	Jobs       []shared.Job `json:"jobs"`
	TotalCount int64        `json:"total_count"`
}

type ActionsListJobsForWorkflowRunAttemptResponse struct {
	ContentType string
	Headers     map[string][]string
	StatusCode  int
	RawResponse *http.Response
	// Response
	ActionsListJobsForWorkflowRunAttempt200ApplicationJSONObject *ActionsListJobsForWorkflowRunAttempt200ApplicationJSON
	// Resource not found
	BasicError *shared.BasicError
}
