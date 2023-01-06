package operations

import (
	"openapi/pkg/models/shared"
)

type TaskStatusesUpdatePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type TaskStatusesUpdateQueryParams struct {
	Since *string `queryParam:"style=form,explode=true,name=since"`
}

type TaskStatusesUpdateSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type TaskStatusesUpdateRequest struct {
	PathParams  TaskStatusesUpdatePathParams
	QueryParams TaskStatusesUpdateQueryParams
	Security    TaskStatusesUpdateSecurity
}

type TaskStatusesUpdateResponse struct {
	ContentType string
	StatusCode  int64
}
