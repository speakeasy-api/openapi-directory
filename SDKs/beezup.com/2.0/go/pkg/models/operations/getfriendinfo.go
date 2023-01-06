package operations

import (
	"openapi/pkg/models/shared"
)

type GetFriendInfoPathParams struct {
	UserID string `pathParam:"style=simple,explode=false,name=userId"`
}

type GetFriendInfoHeaders struct {
	IfNoneMatch *string `header:"style=simple,explode=false,name=If-None-Match"`
}

type GetFriendInfoRequest struct {
	PathParams GetFriendInfoPathParams
	Headers    GetFriendInfoHeaders
}

type GetFriendInfoResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	Headers                          map[string][]string
	StatusCode                       int64
	UserFriendInfo                   *shared.UserFriendInfo
}
