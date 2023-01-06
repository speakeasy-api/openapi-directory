package operations

import (
	"openapi/pkg/models/shared"
)

type GetUserProjectsPathParams struct {
	Username string `pathParam:"style=simple,explode=false,name=username"`
}

type GetUserProjectsQueryParams struct {
	Page *int64 `queryParam:"style=form,explode=true,name=page"`
	Size *int64 `queryParam:"style=form,explode=true,name=size"`
}

type GetUserProjects200ApplicationJSON struct {
	Count    *int64           `json:"count,omitempty"`
	Next     *string          `json:"next,omitempty"`
	Page     *int64           `json:"page,omitempty"`
	Previous *string          `json:"previous,omitempty"`
	Results  []shared.Project `json:"results,omitempty"`
	Size     *int64           `json:"size,omitempty"`
}

type GetUserProjectsRequest struct {
	PathParams  GetUserProjectsPathParams
	QueryParams GetUserProjectsQueryParams
}

type GetUserProjectsResponse struct {
	ContentType                             string
	DefaultPayload                          *shared.DefaultPayload
	StatusCode                              int64
	GetUserProjects200ApplicationJSONObject *GetUserProjects200ApplicationJSON
}
