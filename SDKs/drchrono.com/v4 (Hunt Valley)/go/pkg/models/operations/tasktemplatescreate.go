package operations

import (
	"openapi/pkg/models/shared"
)

type TaskTemplatesCreateQueryParams struct {
	AssigneeGroup *int64  `queryParam:"style=form,explode=true,name=assignee_group"`
	AssigneeUser  *int64  `queryParam:"style=form,explode=true,name=assignee_user"`
	Category      *int64  `queryParam:"style=form,explode=true,name=category"`
	Since         *string `queryParam:"style=form,explode=true,name=since"`
	Status        *int64  `queryParam:"style=form,explode=true,name=status"`
}

type TaskTemplatesCreateSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type TaskTemplatesCreateRequest struct {
	QueryParams TaskTemplatesCreateQueryParams
	Security    TaskTemplatesCreateSecurity
}

type TaskTemplatesCreateResponse struct {
	ContentType  string
	StatusCode   int64
	TaskTemplate *shared.TaskTemplate
}
