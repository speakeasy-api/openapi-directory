package operations

import (
	"openapi/pkg/models/shared"
)

type AutoGetAutoImportConfigurationPathParams struct {
	StoreID string `pathParam:"style=simple,explode=false,name=storeId"`
}

type AutoGetAutoImportConfigurationRequest struct {
	PathParams AutoGetAutoImportConfigurationPathParams
}

type AutoGetAutoImportConfigurationResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
	AutoImportConfiguration          *shared.AutoImportConfiguration
}
