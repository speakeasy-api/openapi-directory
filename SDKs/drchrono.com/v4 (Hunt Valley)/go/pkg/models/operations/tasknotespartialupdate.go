package operations

import (
	"openapi/pkg/models/shared"
)

type TaskNotesPartialUpdatePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type TaskNotesPartialUpdateQueryParams struct {
	Since *string `queryParam:"style=form,explode=true,name=since"`
	Task  *int64  `queryParam:"style=form,explode=true,name=task"`
}

type TaskNotesPartialUpdateSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type TaskNotesPartialUpdateRequest struct {
	PathParams  TaskNotesPartialUpdatePathParams
	QueryParams TaskNotesPartialUpdateQueryParams
	Security    TaskNotesPartialUpdateSecurity
}

type TaskNotesPartialUpdateResponse struct {
	ContentType string
	StatusCode  int64
}
