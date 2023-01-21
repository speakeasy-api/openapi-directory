package operations

import (
	"openapi/pkg/models/shared"
)

type SearchPlaylistsQueryParams struct {
	Count        *int64                   `queryParam:"style=form,explode=true,name=count"`
	Search       string                   `queryParam:"style=form,explode=true,name=search"`
	SearchTarget *shared.SearchTargetEnum `queryParam:"style=form,explode=true,name=searchTarget"`
	Sort         *string                  `queryParam:"style=form,explode=true,name=sort"`
	Start        *int64                   `queryParam:"style=form,explode=true,name=start"`
}

type SearchPlaylists200ApplicationJSON struct {
	Data  []interface{} `json:"data,omitempty"`
	Total *int64        `json:"total,omitempty"`
}

type SearchPlaylistsRequest struct {
	QueryParams SearchPlaylistsQueryParams
}

type SearchPlaylistsResponse struct {
	ContentType                             string
	StatusCode                              int64
	SearchPlaylists200ApplicationJSONObject *SearchPlaylists200ApplicationJSON
}
