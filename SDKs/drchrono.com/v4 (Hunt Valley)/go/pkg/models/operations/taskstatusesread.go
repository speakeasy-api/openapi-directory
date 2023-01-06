package operations

import (
	"openapi/pkg/models/shared"
)

type TaskStatusesReadPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type TaskStatusesReadQueryParams struct {
	Since *string `queryParam:"style=form,explode=true,name=since"`
}

type TaskStatusesReadSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type TaskStatusesReadRequest struct {
	PathParams  TaskStatusesReadPathParams
	QueryParams TaskStatusesReadQueryParams
	Security    TaskStatusesReadSecurity
}

type TaskStatusesReadResponse struct {
	ContentType string
	StatusCode  int64
	TaskStatus  *shared.TaskStatus
}
