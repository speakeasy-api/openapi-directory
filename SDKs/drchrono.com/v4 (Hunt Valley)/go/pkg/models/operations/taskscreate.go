package operations

import (
	"openapi/pkg/models/shared"
)

type TasksCreateQueryParams struct {
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

type TasksCreateSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type TasksCreateRequest struct {
	QueryParams TasksCreateQueryParams
	Security    TasksCreateSecurity
}

type TasksCreateResponse struct {
	ContentType string
	StatusCode  int64
	Task        *shared.Task
}
