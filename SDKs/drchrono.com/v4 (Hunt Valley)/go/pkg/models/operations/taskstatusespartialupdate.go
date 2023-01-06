package operations

import (
	"openapi/pkg/models/shared"
)

type TaskStatusesPartialUpdatePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type TaskStatusesPartialUpdateQueryParams struct {
	Since *string `queryParam:"style=form,explode=true,name=since"`
}

type TaskStatusesPartialUpdateSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type TaskStatusesPartialUpdateRequest struct {
	PathParams  TaskStatusesPartialUpdatePathParams
	QueryParams TaskStatusesPartialUpdateQueryParams
	Security    TaskStatusesPartialUpdateSecurity
}

type TaskStatusesPartialUpdateResponse struct {
	ContentType string
	StatusCode  int64
}
