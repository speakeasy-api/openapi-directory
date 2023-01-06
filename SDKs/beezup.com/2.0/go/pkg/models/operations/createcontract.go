package operations

import (
	"openapi/pkg/models/shared"
)

type CreateContractRequest struct {
	Request shared.OfferRequest `request:"mediaType=application/json"`
}

type CreateContractResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
	CreateContractResponse           *shared.CreateContractResponse
}
