package operations

import (
	"openapi/pkg/models/shared"
)

type TaskCategoriesListQueryParams struct {
	Cursor   *string `queryParam:"style=form,explode=true,name=cursor"`
	PageSize *int64  `queryParam:"style=form,explode=true,name=page_size"`
	Since    *string `queryParam:"style=form,explode=true,name=since"`
}

type TaskCategoriesListSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

// TaskCategoriesList200ApplicationJSON
// Paginated Result
type TaskCategoriesList200ApplicationJSON struct {
	Data     []shared.TaskCategory `json:"data,omitempty"`
	Next     *string               `json:"next,omitempty"`
	Previous *string               `json:"previous,omitempty"`
}

type TaskCategoriesListRequest struct {
	QueryParams TaskCategoriesListQueryParams
	Security    TaskCategoriesListSecurity
}

type TaskCategoriesListResponse struct {
	ContentType                                string
	StatusCode                                 int64
	TaskCategoriesList200ApplicationJSONObject *TaskCategoriesList200ApplicationJSON
}
