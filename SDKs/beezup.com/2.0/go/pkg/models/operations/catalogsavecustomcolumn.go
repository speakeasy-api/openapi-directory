package operations

import (
	"openapi/pkg/models/shared"
)

type CatalogSaveCustomColumnPathParams struct {
	ColumnID string `pathParam:"style=simple,explode=false,name=columnId"`
	StoreID  string `pathParam:"style=simple,explode=false,name=storeId"`
}

type CatalogSaveCustomColumnRequest struct {
	PathParams CatalogSaveCustomColumnPathParams
	Request    shared.CreateCustomColumnRequest `request:"mediaType=application/json"`
}

type CatalogSaveCustomColumnResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
	ImportAlreadyInProgressResponse  *shared.ImportAlreadyInProgressResponse
}
