package operations

import (
	"openapi/pkg/models/shared"
)

type TaskTemplatesReadPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type TaskTemplatesReadQueryParams struct {
	AssigneeGroup *int64  `queryParam:"style=form,explode=true,name=assignee_group"`
	AssigneeUser  *int64  `queryParam:"style=form,explode=true,name=assignee_user"`
	Category      *int64  `queryParam:"style=form,explode=true,name=category"`
	Since         *string `queryParam:"style=form,explode=true,name=since"`
	Status        *int64  `queryParam:"style=form,explode=true,name=status"`
}

type TaskTemplatesReadSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type TaskTemplatesReadRequest struct {
	PathParams  TaskTemplatesReadPathParams
	QueryParams TaskTemplatesReadQueryParams
	Security    TaskTemplatesReadSecurity
}

type TaskTemplatesReadResponse struct {
	ContentType  string
	StatusCode   int64
	TaskTemplate *shared.TaskTemplate
}
