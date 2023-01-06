package operations

import (
	"openapi/pkg/models/shared"
)

type AutoResumeAutoImportPathParams struct {
	StoreID string `pathParam:"style=simple,explode=false,name=storeId"`
}

type AutoResumeAutoImportRequest struct {
	PathParams AutoResumeAutoImportPathParams
}

type AutoResumeAutoImportResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
}
