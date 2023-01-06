package operations

import (
	"openapi/pkg/models/shared"
)

type GetOfferRequest struct {
	Request shared.OfferRequest `request:"mediaType=application/json"`
}

type GetOfferResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
	Offer                            *shared.Offer
}
