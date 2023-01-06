package operations

import (
	"openapi/pkg/models/shared"
)

type GetMediaAssetsIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetMediaAssetsID200ApplicationVndAPIPlusJSON struct {
	Data  *shared.MediaAsset   `json:"data,omitempty"`
	Links *shared.ResourceLink `json:"links,omitempty"`
}

type GetMediaAssetsIDRequest struct {
	PathParams GetMediaAssetsIDPathParams
}

type GetMediaAssetsIDResponse struct {
	ContentType                                        string
	Headers                                            map[string][]string
	StatusCode                                         int64
	GetMediaAssetsID200ApplicationVndAPIPlusJSONObject *GetMediaAssetsID200ApplicationVndAPIPlusJSON
}
