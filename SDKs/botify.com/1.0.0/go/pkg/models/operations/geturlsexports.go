package operations

import (
	"openapi/pkg/models/shared"
)

type GetUrlsExportsPathParams struct {
	AnalysisSlug string `pathParam:"style=simple,explode=false,name=analysis_slug"`
	ProjectSlug  string `pathParam:"style=simple,explode=false,name=project_slug"`
	Username     string `pathParam:"style=simple,explode=false,name=username"`
}

type GetUrlsExportsQueryParams struct {
	Page *int64 `queryParam:"style=form,explode=true,name=page"`
	Size *int64 `queryParam:"style=form,explode=true,name=size"`
}

type GetUrlsExports200ApplicationJSON struct {
	Count    *int64                   `json:"count,omitempty"`
	Next     *string                  `json:"next,omitempty"`
	Page     *int64                   `json:"page,omitempty"`
	Previous *string                  `json:"previous,omitempty"`
	Results  []shared.CsvExportStatus `json:"results,omitempty"`
	Size     *int64                   `json:"size,omitempty"`
}

type GetUrlsExportsRequest struct {
	PathParams  GetUrlsExportsPathParams
	QueryParams GetUrlsExportsQueryParams
}

type GetUrlsExportsResponse struct {
	ContentType                            string
	DefaultPayload                         *shared.DefaultPayload
	StatusCode                             int64
	GetUrlsExports200ApplicationJSONObject *GetUrlsExports200ApplicationJSON
}
