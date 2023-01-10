package operations

import (
	"openapi/pkg/models/shared"
)

type CreateStoreRequest struct {
	Request shared.CreateStoreRequest `request:"mediaType=application/json"`
}

type CreateStoreResponse struct {
	BeezUPCommonErrorResponseMessage    *shared.BeezUpCommonErrorResponseMessage
	ContentType                         string
	StatusCode                          int64
	ErrorResponseMessagePaymentRequired *shared.ErrorResponseMessagePaymentRequired
	LinksGetStoreLink                   *shared.LinksGetStoreLink
}
