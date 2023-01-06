package operations

import (
	"openapi/pkg/models/shared"
)

type TaskNotesCreateQueryParams struct {
	Since *string `queryParam:"style=form,explode=true,name=since"`
	Task  *int64  `queryParam:"style=form,explode=true,name=task"`
}

type TaskNotesCreateSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type TaskNotesCreateRequest struct {
	QueryParams TaskNotesCreateQueryParams
	Security    TaskNotesCreateSecurity
}

type TaskNotesCreateResponse struct {
	ContentType string
	StatusCode  int64
	TaskNote    *shared.TaskNote
}
