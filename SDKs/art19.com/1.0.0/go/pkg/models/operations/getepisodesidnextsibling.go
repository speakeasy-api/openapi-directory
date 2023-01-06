package operations

import (
	"openapi/pkg/models/shared"
)

type GetEpisodesIDNextSiblingPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetEpisodesIDNextSiblingQueryParams struct {
	Rss *bool `queryParam:"style=form,explode=true,name=rss"`
}

type GetEpisodesIDNextSibling200ApplicationVndAPIPlusJSON struct {
	Data  *shared.Episode      `json:"data,omitempty"`
	Links *shared.ResourceLink `json:"links,omitempty"`
}

type GetEpisodesIDNextSiblingRequest struct {
	PathParams  GetEpisodesIDNextSiblingPathParams
	QueryParams GetEpisodesIDNextSiblingQueryParams
}

type GetEpisodesIDNextSiblingResponse struct {
	ContentType                                                string
	Headers                                                    map[string][]string
	StatusCode                                                 int64
	GetEpisodesIDNextSibling200ApplicationVndAPIPlusJSONObject *GetEpisodesIDNextSibling200ApplicationVndAPIPlusJSON
}
