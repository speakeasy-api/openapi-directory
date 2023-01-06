package operations

import (
	"openapi/pkg/models/shared"
)

type GetUserListOfValuesPathParams struct {
	ListName string `pathParam:"style=simple,explode=false,name=listName"`
}

type GetUserListOfValuesHeaders struct {
	AcceptLanguage []string `header:"style=simple,explode=false,name=Accept-Language"`
	IfNoneMatch    *string  `header:"style=simple,explode=false,name=If-None-Match"`
}

type GetUserListOfValuesRequest struct {
	PathParams GetUserListOfValuesPathParams
	Headers    GetUserListOfValuesHeaders
}

type GetUserListOfValuesResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	Headers                          map[string][]string
	StatusCode                       int64
	UserListOfValuesResponse         *shared.UserListOfValuesResponse
}
