package operations

import (
	"openapi/pkg/models/shared"
)

type AutoStartAutoImportPathParams struct {
	StoreID string `pathParam:"style=simple,explode=false,name=storeId"`
}

type AutoStartAutoImportRequest struct {
	PathParams AutoStartAutoImportPathParams
}

type AutoStartAutoImportResponse struct {
	BeezUPCommonErrorResponseMessage             *shared.BeezUpCommonErrorResponseMessage
	ContentType                                  string
	Headers                                      map[string][]string
	StatusCode                                   int64
	LinksImportationGetImportationMonitoringLink map[string]interface{}
}
