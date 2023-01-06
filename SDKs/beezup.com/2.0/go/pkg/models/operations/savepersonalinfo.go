package operations

import (
	"openapi/pkg/models/shared"
)

type SavePersonalInfoRequest struct {
	Request shared.PersonalInfo `request:"mediaType=application/json"`
}

type SavePersonalInfoResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
}
