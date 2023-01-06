package operations

import (
	"openapi/pkg/models/shared"
)

type ImportationGetReportingsPathParams struct {
	StoreID string `pathParam:"style=simple,explode=false,name=storeId"`
}

type ImportationGetReportingsRequest struct {
	PathParams ImportationGetReportingsPathParams
}

type ImportationGetReportingsResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
	ImportationsResponse             *shared.ImportationsResponse
}
