package operations

import (
	"openapi/pkg/models/shared"
)

type TaskNotesReadPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type TaskNotesReadQueryParams struct {
	Since *string `queryParam:"style=form,explode=true,name=since"`
	Task  *int64  `queryParam:"style=form,explode=true,name=task"`
}

type TaskNotesReadSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type TaskNotesReadRequest struct {
	PathParams  TaskNotesReadPathParams
	QueryParams TaskNotesReadQueryParams
	Security    TaskNotesReadSecurity
}

type TaskNotesReadResponse struct {
	ContentType string
	StatusCode  int64
	TaskNote    *shared.TaskNote
}
