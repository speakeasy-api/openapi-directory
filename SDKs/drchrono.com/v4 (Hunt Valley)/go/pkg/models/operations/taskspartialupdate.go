package operations

import (
	"openapi/pkg/models/shared"
)

type TasksPartialUpdatePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type TasksPartialUpdateQueryParams struct {
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

type TasksPartialUpdateSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type TasksPartialUpdateRequest struct {
	PathParams  TasksPartialUpdatePathParams
	QueryParams TasksPartialUpdateQueryParams
	Security    TasksPartialUpdateSecurity
}

type TasksPartialUpdateResponse struct {
	ContentType string
	StatusCode  int64
}
