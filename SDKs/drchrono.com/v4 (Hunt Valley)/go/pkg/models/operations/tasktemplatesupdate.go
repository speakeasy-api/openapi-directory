package operations

import (
	"openapi/pkg/models/shared"
)

type TaskTemplatesUpdatePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type TaskTemplatesUpdateQueryParams struct {
	AssigneeGroup *int64  `queryParam:"style=form,explode=true,name=assignee_group"`
	AssigneeUser  *int64  `queryParam:"style=form,explode=true,name=assignee_user"`
	Category      *int64  `queryParam:"style=form,explode=true,name=category"`
	Since         *string `queryParam:"style=form,explode=true,name=since"`
	Status        *int64  `queryParam:"style=form,explode=true,name=status"`
}

type TaskTemplatesUpdateSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type TaskTemplatesUpdateRequest struct {
	PathParams  TaskTemplatesUpdatePathParams
	QueryParams TaskTemplatesUpdateQueryParams
	Security    TaskTemplatesUpdateSecurity
}

type TaskTemplatesUpdateResponse struct {
	ContentType string
	StatusCode  int64
}
