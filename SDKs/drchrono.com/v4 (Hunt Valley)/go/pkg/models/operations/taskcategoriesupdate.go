package operations

import (
	"openapi/pkg/models/shared"
)

type TaskCategoriesUpdatePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type TaskCategoriesUpdateQueryParams struct {
	Since *string `queryParam:"style=form,explode=true,name=since"`
}

type TaskCategoriesUpdateSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type TaskCategoriesUpdateRequest struct {
	PathParams  TaskCategoriesUpdatePathParams
	QueryParams TaskCategoriesUpdateQueryParams
	Security    TaskCategoriesUpdateSecurity
}

type TaskCategoriesUpdateResponse struct {
	ContentType string
	StatusCode  int64
}
