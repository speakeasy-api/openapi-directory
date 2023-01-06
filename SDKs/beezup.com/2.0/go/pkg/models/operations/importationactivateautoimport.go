package operations

import (
	"openapi/pkg/models/shared"
)

type ImportationActivateAutoImportPathParams struct {
	StoreID string `pathParam:"style=simple,explode=false,name=storeId"`
}

type ImportationActivateAutoImportRequest struct {
	PathParams ImportationActivateAutoImportPathParams
}

type ImportationActivateAutoImportResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
}
