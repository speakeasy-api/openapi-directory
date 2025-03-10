// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type GetAutomationRunsRequest struct {
	// ID of the associated Automation.
	AutomationID int `queryParam:"style=form,explode=true,name=automation_id"`
	// Used for pagination.  When a list request has more records available, cursors are provided in the response headers `X-Files-Cursor-Next` and `X-Files-Cursor-Prev`.  Send one of those cursor value here to resume an existing list from the next available record.  Note: many of our SDKs have iterator methods that will automatically handle cursor-based pagination.
	Cursor *string `queryParam:"style=form,explode=true,name=cursor"`
	// If set, return records where the specified field is equal to the supplied value. Valid fields are `status`.
	Filter map[string]interface{} `queryParam:"style=form,explode=true,name=filter"`
	// Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).
	PerPage *int `queryParam:"style=form,explode=true,name=per_page"`
	// If set, sort records by the specified field in either `asc` or `desc` direction (e.g. `sort_by[created_at]=desc`). Valid fields are `created_at` and `status`.
	SortBy map[string]interface{} `queryParam:"style=form,explode=true,name=sort_by"`
	// User ID.  Provide a value of `0` to operate the current session's user.
	UserID *int `queryParam:"style=form,explode=true,name=user_id"`
}

type GetAutomationRunsResponse struct {
	// A list of AutomationRuns objects.
	AutomationRunEntities []shared.AutomationRunEntity
	ContentType           string
	StatusCode            int
	RawResponse           *http.Response
}
