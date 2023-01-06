package operations

import (
	"openapi/pkg/models/shared"
)

type TaskNotesUpdatePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type TaskNotesUpdateQueryParams struct {
	Since *string `queryParam:"style=form,explode=true,name=since"`
	Task  *int64  `queryParam:"style=form,explode=true,name=task"`
}

type TaskNotesUpdateSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type TaskNotesUpdateRequest struct {
	PathParams  TaskNotesUpdatePathParams
	QueryParams TaskNotesUpdateQueryParams
	Security    TaskNotesUpdateSecurity
}

type TaskNotesUpdateResponse struct {
	ContentType string
	StatusCode  int64
}
