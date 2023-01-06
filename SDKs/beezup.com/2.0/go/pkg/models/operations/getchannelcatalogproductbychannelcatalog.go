package operations

import (
	"openapi/pkg/models/shared"
)

type GetChannelCatalogProductByChannelCatalogRequest struct {
	Request shared.ChannelCatalogProductByChannelCatalogRequest `request:"mediaType=application/json"`
}

type GetChannelCatalogProductByChannelCatalogResponse struct {
	BeezUPCommonErrorResponseMessage              *shared.BeezUpCommonErrorResponseMessage
	ContentType                                   string
	StatusCode                                    int64
	ChannelCatalogProductByChannelCatalogResponse *shared.ChannelCatalogProductByChannelCatalogResponse
}
