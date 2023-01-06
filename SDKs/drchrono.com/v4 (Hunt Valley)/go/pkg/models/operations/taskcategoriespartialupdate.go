package operations

import (
	"openapi/pkg/models/shared"
)

type TaskCategoriesPartialUpdatePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type TaskCategoriesPartialUpdateQueryParams struct {
	Since *string `queryParam:"style=form,explode=true,name=since"`
}

type TaskCategoriesPartialUpdateSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type TaskCategoriesPartialUpdateRequest struct {
	PathParams  TaskCategoriesPartialUpdatePathParams
	QueryParams TaskCategoriesPartialUpdateQueryParams
	Security    TaskCategoriesPartialUpdateSecurity
}

type TaskCategoriesPartialUpdateResponse struct {
	ContentType string
	StatusCode  int64
}
