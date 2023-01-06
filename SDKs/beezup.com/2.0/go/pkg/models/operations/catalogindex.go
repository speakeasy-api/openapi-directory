package operations

import (
	"openapi/pkg/models/shared"
)

type CatalogIndexResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
	CatalogIndex                     *shared.CatalogIndex
}
