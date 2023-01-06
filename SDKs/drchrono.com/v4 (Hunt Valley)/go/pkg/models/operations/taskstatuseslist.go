package operations

import (
	"openapi/pkg/models/shared"
)

type TaskStatusesListQueryParams struct {
	Cursor   *string `queryParam:"style=form,explode=true,name=cursor"`
	PageSize *int64  `queryParam:"style=form,explode=true,name=page_size"`
	Since    *string `queryParam:"style=form,explode=true,name=since"`
}

type TaskStatusesListSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

// TaskStatusesList200ApplicationJSON
// Paginated Result
type TaskStatusesList200ApplicationJSON struct {
	Data     []shared.TaskStatus `json:"data,omitempty"`
	Next     *string             `json:"next,omitempty"`
	Previous *string             `json:"previous,omitempty"`
}

type TaskStatusesListRequest struct {
	QueryParams TaskStatusesListQueryParams
	Security    TaskStatusesListSecurity
}

type TaskStatusesListResponse struct {
	ContentType                              string
	StatusCode                               int64
	TaskStatusesList200ApplicationJSONObject *TaskStatusesList200ApplicationJSON
}
