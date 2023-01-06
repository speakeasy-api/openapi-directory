package operations

import (
	"openapi/pkg/models/shared"
)

type ImportationConfigureCatalogColumnPathParams struct {
	ColumnID    string `pathParam:"style=simple,explode=false,name=columnId"`
	ExecutionID string `pathParam:"style=simple,explode=false,name=executionId"`
	StoreID     string `pathParam:"style=simple,explode=false,name=storeId"`
}

type ImportationConfigureCatalogColumnRequest struct {
	PathParams ImportationConfigureCatalogColumnPathParams
	Request    shared.ConfigureCatalogColumnCatalogRequest `request:"mediaType=application/json"`
}

type ImportationConfigureCatalogColumnResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
}
