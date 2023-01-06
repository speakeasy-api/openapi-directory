package operations

import (
	"openapi/pkg/models/shared"
)

type AutoScheduleAutoImportPathParams struct {
	StoreID string `pathParam:"style=simple,explode=false,name=storeId"`
}

type AutoScheduleAutoImportRequest struct {
	PathParams AutoScheduleAutoImportPathParams
	Request    shared.ScheduleAutoImportRequest `request:"mediaType=application/json"`
}

type AutoScheduleAutoImportResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
}
