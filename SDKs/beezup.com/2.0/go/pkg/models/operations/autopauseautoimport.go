package operations

import (
	"openapi/pkg/models/shared"
)

type AutoPauseAutoImportPathParams struct {
	StoreID string `pathParam:"style=simple,explode=false,name=storeId"`
}

type AutoPauseAutoImportRequest struct {
	PathParams AutoPauseAutoImportPathParams
}

type AutoPauseAutoImportResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
}
