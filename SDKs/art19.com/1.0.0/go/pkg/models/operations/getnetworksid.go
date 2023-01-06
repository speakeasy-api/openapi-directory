package operations

import (
	"openapi/pkg/models/shared"
)

type GetNetworksIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetNetworksID200ApplicationVndAPIPlusJSON struct {
	Data  *shared.Network      `json:"data,omitempty"`
	Links *shared.ResourceLink `json:"links,omitempty"`
}

type GetNetworksIDRequest struct {
	PathParams GetNetworksIDPathParams
}

type GetNetworksIDResponse struct {
	ContentType                                     string
	Headers                                         map[string][]string
	StatusCode                                      int64
	GetNetworksID200ApplicationVndAPIPlusJSONObject *GetNetworksID200ApplicationVndAPIPlusJSON
}
