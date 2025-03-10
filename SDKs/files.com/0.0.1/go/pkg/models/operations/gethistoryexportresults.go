// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type GetHistoryExportResultsRequest struct {
	// Used for pagination.  When a list request has more records available, cursors are provided in the response headers `X-Files-Cursor-Next` and `X-Files-Cursor-Prev`.  Send one of those cursor value here to resume an existing list from the next available record.  Note: many of our SDKs have iterator methods that will automatically handle cursor-based pagination.
	Cursor *string `queryParam:"style=form,explode=true,name=cursor"`
	// ID of the associated history export.
	HistoryExportID int `queryParam:"style=form,explode=true,name=history_export_id"`
	// Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).
	PerPage *int `queryParam:"style=form,explode=true,name=per_page"`
	// User ID.  Provide a value of `0` to operate the current session's user.
	UserID *int `queryParam:"style=form,explode=true,name=user_id"`
}

type GetHistoryExportResultsResponse struct {
	ContentType string
	// A list of HistoryExportResults objects.
	HistoryExportResultEntities []shared.HistoryExportResultEntity
	StatusCode                  int
	RawResponse                 *http.Response
}
