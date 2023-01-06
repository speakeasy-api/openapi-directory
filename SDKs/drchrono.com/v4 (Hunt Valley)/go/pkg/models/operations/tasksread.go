package operations

import (
	"openapi/pkg/models/shared"
)

type TasksReadPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type TasksReadQueryParams struct {
	AssigneeGroup *int64  `queryParam:"style=form,explode=true,name=assignee_group"`
	AssigneeUser  *int64  `queryParam:"style=form,explode=true,name=assignee_user"`
	Category      *int64  `queryParam:"style=form,explode=true,name=category"`
	DueAtDate     *string `queryParam:"style=form,explode=true,name=due_at_date"`
	DueAtRange    *string `queryParam:"style=form,explode=true,name=due_at_range"`
	DueAtSince    *string `queryParam:"style=form,explode=true,name=due_at_since"`
	DueAtUnknown  *string `queryParam:"style=form,explode=true,name=due_at_unknown"`
	Since         *string `queryParam:"style=form,explode=true,name=since"`
	Status        *int64  `queryParam:"style=form,explode=true,name=status"`
}

type TasksReadSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type TasksReadRequest struct {
	PathParams  TasksReadPathParams
	QueryParams TasksReadQueryParams
	Security    TasksReadSecurity
}

type TasksReadResponse struct {
	ContentType string
	StatusCode  int64
	Task        *shared.Task
}
