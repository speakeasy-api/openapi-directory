package operations

import (
	"openapi/pkg/models/shared"
)

type TasksListQueryParams struct {
	AssigneeGroup *int64  `queryParam:"style=form,explode=true,name=assignee_group"`
	AssigneeUser  *int64  `queryParam:"style=form,explode=true,name=assignee_user"`
	Category      *int64  `queryParam:"style=form,explode=true,name=category"`
	Cursor        *string `queryParam:"style=form,explode=true,name=cursor"`
	DueAtDate     *string `queryParam:"style=form,explode=true,name=due_at_date"`
	DueAtRange    *string `queryParam:"style=form,explode=true,name=due_at_range"`
	DueAtSince    *string `queryParam:"style=form,explode=true,name=due_at_since"`
	DueAtUnknown  *string `queryParam:"style=form,explode=true,name=due_at_unknown"`
	PageSize      *int64  `queryParam:"style=form,explode=true,name=page_size"`
	Since         *string `queryParam:"style=form,explode=true,name=since"`
	Status        *int64  `queryParam:"style=form,explode=true,name=status"`
}

type TasksListSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

// TasksList200ApplicationJSON
// Paginated Result
type TasksList200ApplicationJSON struct {
	Data     []shared.Task `json:"data,omitempty"`
	Next     *string       `json:"next,omitempty"`
	Previous *string       `json:"previous,omitempty"`
}

type TasksListRequest struct {
	QueryParams TasksListQueryParams
	Security    TasksListSecurity
}

type TasksListResponse struct {
	ContentType                       string
	StatusCode                        int64
	TasksList200ApplicationJSONObject *TasksList200ApplicationJSON
}
