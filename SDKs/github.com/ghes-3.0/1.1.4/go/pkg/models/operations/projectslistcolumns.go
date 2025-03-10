// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type ProjectsListColumnsRequest struct {
	// Page number of the results to fetch.
	Page *int64 `queryParam:"style=form,explode=true,name=page"`
	// Results per page (max 100)
	PerPage   *int64 `queryParam:"style=form,explode=true,name=per_page"`
	ProjectID int64  `pathParam:"style=simple,explode=false,name=project_id"`
}

type ProjectsListColumnsResponse struct {
	ContentType string
	Headers     map[string][]string
	StatusCode  int
	RawResponse *http.Response
	// Requires authentication
	BasicError *shared.BasicError
	// Response
	ProjectColumns []shared.ProjectColumn
}
