package operations

import (
	"openapi/pkg/models/shared"
)

type TaskCategoriesReadPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type TaskCategoriesReadQueryParams struct {
	Since *string `queryParam:"style=form,explode=true,name=since"`
}

type TaskCategoriesReadSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type TaskCategoriesReadRequest struct {
	PathParams  TaskCategoriesReadPathParams
	QueryParams TaskCategoriesReadQueryParams
	Security    TaskCategoriesReadSecurity
}

type TaskCategoriesReadResponse struct {
	ContentType  string
	StatusCode   int64
	TaskCategory *shared.TaskCategory
}
