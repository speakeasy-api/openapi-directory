package operations

import (
	"openapi/pkg/models/shared"
)

type GetStandardOffersHeaders struct {
	IfNoneMatch *string `header:"style=simple,explode=false,name=If-None-Match"`
}

type GetStandardOffersRequest struct {
	Headers GetStandardOffersHeaders
}

type GetStandardOffersResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	Headers                          map[string][]string
	StatusCode                       int64
	StandardOffers                   *shared.StandardOffers
}
