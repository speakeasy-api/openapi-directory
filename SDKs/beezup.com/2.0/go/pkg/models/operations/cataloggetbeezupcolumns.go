package operations

import (
	"openapi/pkg/models/shared"
)

type CatalogGetBeezUpColumnsResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
	BeezUPColumnConfigurations       []shared.BeezUpColumnConfiguration
}
