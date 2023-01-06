package operations

import (
	"openapi/pkg/models/shared"
)

type GetPublicListOfValuesPathParams struct {
	ListName string `pathParam:"style=simple,explode=false,name=listName"`
}

type GetPublicListOfValuesHeaders struct {
	AcceptLanguage []string `header:"style=simple,explode=false,name=Accept-Language"`
	IfNoneMatch    *string  `header:"style=simple,explode=false,name=If-None-Match"`
}

type GetPublicListOfValuesRequest struct {
	PathParams GetPublicListOfValuesPathParams
	Headers    GetPublicListOfValuesHeaders
}

type GetPublicListOfValuesResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	Headers                          map[string][]string
	StatusCode                       int64
	PublicListOfValuesResponse       *shared.PublicListOfValuesResponse
}
