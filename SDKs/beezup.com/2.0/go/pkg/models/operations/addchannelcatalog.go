package operations

import (
	"openapi/pkg/models/shared"
)

type AddChannelCatalogRequest struct {
	Request shared.AddChannelCatalogRequest `request:"mediaType=application/json"`
}

type AddChannelCatalogResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	Headers                          map[string][]string
	StatusCode                       int64
	LinksGetChannelCatalogLink       map[string]interface{}
}
