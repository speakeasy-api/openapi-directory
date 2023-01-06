package operations

import (
	"openapi/pkg/models/shared"
)

type GetEpisodesIDPreviousSiblingPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetEpisodesIDPreviousSiblingQueryParams struct {
	Rss *bool `queryParam:"style=form,explode=true,name=rss"`
}

type GetEpisodesIDPreviousSibling200ApplicationVndAPIPlusJSON struct {
	Data  *shared.Episode      `json:"data,omitempty"`
	Links *shared.ResourceLink `json:"links,omitempty"`
}

type GetEpisodesIDPreviousSiblingRequest struct {
	PathParams  GetEpisodesIDPreviousSiblingPathParams
	QueryParams GetEpisodesIDPreviousSiblingQueryParams
}

type GetEpisodesIDPreviousSiblingResponse struct {
	ContentType                                                    string
	Headers                                                        map[string][]string
	StatusCode                                                     int64
	GetEpisodesIDPreviousSibling200ApplicationVndAPIPlusJSONObject *GetEpisodesIDPreviousSibling200ApplicationVndAPIPlusJSON
}
