package operations

import (
	"openapi/pkg/models/shared"
)

type TaskNotesListQueryParams struct {
	Cursor   *string `queryParam:"style=form,explode=true,name=cursor"`
	PageSize *int64  `queryParam:"style=form,explode=true,name=page_size"`
	Since    *string `queryParam:"style=form,explode=true,name=since"`
	Task     *int64  `queryParam:"style=form,explode=true,name=task"`
}

type TaskNotesListSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

// TaskNotesList200ApplicationJSON
// Paginated Result
type TaskNotesList200ApplicationJSON struct {
	Data     []shared.TaskNote `json:"data,omitempty"`
	Next     *string           `json:"next,omitempty"`
	Previous *string           `json:"previous,omitempty"`
}

type TaskNotesListRequest struct {
	QueryParams TaskNotesListQueryParams
	Security    TaskNotesListSecurity
}

type TaskNotesListResponse struct {
	ContentType                           string
	StatusCode                            int64
	TaskNotesList200ApplicationJSONObject *TaskNotesList200ApplicationJSON
}
