package operations

import (
	"openapi/pkg/models/shared"
)

type AutoConfigureAutoImportIntervalPathParams struct {
	StoreID string `pathParam:"style=simple,explode=false,name=storeId"`
}

type AutoConfigureAutoImportIntervalRequest struct {
	PathParams AutoConfigureAutoImportIntervalPathParams
	Request    shared.ConfigureAutoImportIntervalRequest `request:"mediaType=application/json"`
}

type AutoConfigureAutoImportIntervalResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
}
