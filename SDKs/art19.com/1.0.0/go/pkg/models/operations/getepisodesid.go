package operations

import (
	"openapi/pkg/models/shared"
)

type GetEpisodesIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetEpisodesID200ApplicationVndAPIPlusJSON struct {
	Data  *shared.Episode      `json:"data,omitempty"`
	Links *shared.ResourceLink `json:"links,omitempty"`
}

type GetEpisodesIDRequest struct {
	PathParams GetEpisodesIDPathParams
}

type GetEpisodesIDResponse struct {
	ContentType                                     string
	Headers                                         map[string][]string
	StatusCode                                      int64
	GetEpisodesID200ApplicationVndAPIPlusJSONObject *GetEpisodesID200ApplicationVndAPIPlusJSON
}
