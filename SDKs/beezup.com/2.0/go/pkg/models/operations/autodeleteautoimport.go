package operations

import (
	"openapi/pkg/models/shared"
)

type AutoDeleteAutoImportPathParams struct {
	StoreID string `pathParam:"style=simple,explode=false,name=storeId"`
}

type AutoDeleteAutoImportRequest struct {
	PathParams AutoDeleteAutoImportPathParams
}

type AutoDeleteAutoImportResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
}
