package operations

import (
	"openapi/pkg/models/shared"
)

type GetProjectAnalysesPathParams struct {
	ProjectSlug string `pathParam:"style=simple,explode=false,name=project_slug"`
	Username    string `pathParam:"style=simple,explode=false,name=username"`
}

type GetProjectAnalysesQueryParams struct {
	Page *int64 `queryParam:"style=form,explode=true,name=page"`
	Size *int64 `queryParam:"style=form,explode=true,name=size"`
}

type GetProjectAnalyses200ApplicationJSON struct {
	Count    *int64            `json:"count,omitempty"`
	Next     *string           `json:"next,omitempty"`
	Page     *int64            `json:"page,omitempty"`
	Previous *string           `json:"previous,omitempty"`
	Results  []shared.Analysis `json:"results,omitempty"`
	Size     *int64            `json:"size,omitempty"`
}

type GetProjectAnalysesRequest struct {
	PathParams  GetProjectAnalysesPathParams
	QueryParams GetProjectAnalysesQueryParams
}

type GetProjectAnalysesResponse struct {
	ContentType                                string
	DefaultPayload                             *shared.DefaultPayload
	StatusCode                                 int64
	GetProjectAnalyses200ApplicationJSONObject *GetProjectAnalyses200ApplicationJSON
}
