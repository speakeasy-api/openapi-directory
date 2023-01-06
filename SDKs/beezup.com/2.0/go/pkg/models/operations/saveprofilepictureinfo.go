package operations

import (
	"openapi/pkg/models/shared"
)

type SaveProfilePictureInfoRequest struct {
	Request shared.ProfilePictureInfo `request:"mediaType=application/json"`
}

type SaveProfilePictureInfoResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
}
