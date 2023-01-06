package operations

import (
	"openapi/pkg/models/shared"
)

type GetChannelCatalogFilterOperatorsResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
	FilterOperators                  []shared.FilterOperator
}
