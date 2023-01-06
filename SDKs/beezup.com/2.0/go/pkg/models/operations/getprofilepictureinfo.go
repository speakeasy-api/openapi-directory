package operations

import (
	"openapi/pkg/models/shared"
)

type GetProfilePictureInfoHeaders struct {
	IfNoneMatch *string `header:"style=simple,explode=false,name=If-None-Match"`
}

type GetProfilePictureInfoRequest struct {
	Headers GetProfilePictureInfoHeaders
}

type GetProfilePictureInfoResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	Headers                          map[string][]string
	StatusCode                       int64
	ProfilePictureInfoResponse       *shared.ProfilePictureInfoResponse
}
