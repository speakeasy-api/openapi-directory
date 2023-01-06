package operations

import (
	"openapi/pkg/models/shared"
)

type ImportationGetReportingsAllStoresResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
	ImportationsPerStoreResponse     map[string]shared.ImportationsResponse
}
