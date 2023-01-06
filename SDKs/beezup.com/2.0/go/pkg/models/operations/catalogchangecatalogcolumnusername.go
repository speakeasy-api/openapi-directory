package operations

import (
	"openapi/pkg/models/shared"
)

type CatalogChangeCatalogColumnUserNamePathParams struct {
	ColumnID string `pathParam:"style=simple,explode=false,name=columnId"`
	StoreID  string `pathParam:"style=simple,explode=false,name=storeId"`
}

type CatalogChangeCatalogColumnUserNameRequest struct {
	PathParams CatalogChangeCatalogColumnUserNamePathParams
	Request    shared.ChangeUserColumnNameRequest `request:"mediaType=application/json"`
}

type CatalogChangeCatalogColumnUserNameResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
	ImportAlreadyInProgressResponse  *shared.ImportAlreadyInProgressResponse
}
