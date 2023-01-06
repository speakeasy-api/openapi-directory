package operations

import (
	"openapi/pkg/models/shared"
)

type ConfigureAutomaticTransitionsRequest struct {
	Request shared.ConfigureAutomaticTransitionRequest `request:"mediaType=application/json"`
}

type ConfigureAutomaticTransitionsResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
}
