package operations

import (
	"openapi/pkg/models/shared"
)

type GetImagesListTypeEnum string

const (
	GetImagesListTypeEnumApplication  GetImagesListTypeEnum = "application"
	GetImagesListTypeEnumDistribution GetImagesListTypeEnum = "distribution"
)

type GetImagesListQueryParams struct {
	Page    *int64                 `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64                 `queryParam:"style=form,explode=true,name=per_page"`
	Private *bool                  `queryParam:"style=form,explode=true,name=private"`
	TagName *string                `queryParam:"style=form,explode=true,name=tag_name"`
	Type    *GetImagesListTypeEnum `queryParam:"style=form,explode=true,name=type"`
}

type GetImagesList200ApplicationJSONLinksPages1 struct {
	Prev *string `json:"prev,omitempty"`
}

type GetImagesList200ApplicationJSONLinksPages3 struct {
	Next *string `json:"next,omitempty"`
}

type GetImagesList200ApplicationJSONLinks struct {
	Pages *interface{} `json:"pages,omitempty"`
}

type GetImagesList200ApplicationJSON struct {
	Links *GetImagesList200ApplicationJSONLinks `json:"links,omitempty"`
}

type GetImagesList401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id,omitempty"`
}

type GetImagesListRequest struct {
	QueryParams GetImagesListQueryParams
}

type GetImagesListResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	GetImagesList200ApplicationJSONObject                     *GetImagesList200ApplicationJSON
	GetImagesList401ApplicationJSONObject                     *GetImagesList401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
