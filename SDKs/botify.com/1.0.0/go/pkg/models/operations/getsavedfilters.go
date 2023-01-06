package operations

import (
	"openapi/pkg/models/shared"
)

type GetSavedFiltersPathParams struct {
	ProjectSlug string `pathParam:"style=simple,explode=false,name=project_slug"`
	Username    string `pathParam:"style=simple,explode=false,name=username"`
}

type GetSavedFiltersQueryParams struct {
	Page *int64 `queryParam:"style=form,explode=true,name=page"`
	Size *int64 `queryParam:"style=form,explode=true,name=size"`
}

type GetSavedFilters200ApplicationJSON struct {
	Count    *int64                      `json:"count,omitempty"`
	Next     *string                     `json:"next,omitempty"`
	Page     *int64                      `json:"page,omitempty"`
	Previous *string                     `json:"previous,omitempty"`
	Results  []shared.ProjectSavedFilter `json:"results,omitempty"`
	Size     *int64                      `json:"size,omitempty"`
}

type GetSavedFiltersRequest struct {
	PathParams  GetSavedFiltersPathParams
	QueryParams GetSavedFiltersQueryParams
}

type GetSavedFiltersResponse struct {
	ContentType                             string
	DefaultPayload                          *shared.DefaultPayload
	StatusCode                              int64
	GetSavedFilters200ApplicationJSONObject *GetSavedFilters200ApplicationJSON
}
