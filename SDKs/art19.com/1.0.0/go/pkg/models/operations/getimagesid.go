package operations

import (
	"openapi/pkg/models/shared"
)

type GetImagesIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetImagesID200ApplicationVndAPIPlusJSON struct {
	Data  *shared.Image        `json:"data,omitempty"`
	Links *shared.ResourceLink `json:"links,omitempty"`
}

type GetImagesIDRequest struct {
	PathParams GetImagesIDPathParams
}

type GetImagesIDResponse struct {
	ContentType                                   string
	Headers                                       map[string][]string
	StatusCode                                    int64
	GetImagesID200ApplicationVndAPIPlusJSONObject *GetImagesID200ApplicationVndAPIPlusJSON
}
