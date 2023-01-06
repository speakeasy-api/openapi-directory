package operations

import (
	"openapi/pkg/models/shared"
)

type ImportationGetManualUpdateLastInputConfigPathParams struct {
	StoreID string `pathParam:"style=simple,explode=false,name=storeId"`
}

type ImportationGetManualUpdateLastInputConfigRequest struct {
	PathParams ImportationGetManualUpdateLastInputConfigPathParams
}

type ImportationGetManualUpdateLastInputConfigResponse struct {
	BeezUPCommonErrorResponseMessage   *shared.BeezUpCommonErrorResponseMessage
	ContentType                        string
	StatusCode                         int64
	LastManualImportInputConfiguration *shared.LastManualImportInputConfiguration
}
