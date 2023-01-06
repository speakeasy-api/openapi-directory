package operations

import (
	"openapi/pkg/models/shared"
)

type TaskCategoriesCreateQueryParams struct {
	Since *string `queryParam:"style=form,explode=true,name=since"`
}

type TaskCategoriesCreateSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type TaskCategoriesCreateRequest struct {
	QueryParams TaskCategoriesCreateQueryParams
	Security    TaskCategoriesCreateSecurity
}

type TaskCategoriesCreateResponse struct {
	ContentType  string
	StatusCode   int64
	TaskCategory *shared.TaskCategory
}
