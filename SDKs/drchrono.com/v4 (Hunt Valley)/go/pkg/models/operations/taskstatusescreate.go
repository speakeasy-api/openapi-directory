package operations

import (
	"openapi/pkg/models/shared"
)

type TaskStatusesCreateQueryParams struct {
	Since *string `queryParam:"style=form,explode=true,name=since"`
}

type TaskStatusesCreateSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type TaskStatusesCreateRequest struct {
	QueryParams TaskStatusesCreateQueryParams
	Security    TaskStatusesCreateSecurity
}

type TaskStatusesCreateResponse struct {
	ContentType string
	StatusCode  int64
	TaskStatus  *shared.TaskStatus
}
