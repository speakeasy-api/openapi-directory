package operations

import (
	"openapi/pkg/models/shared"
)

type CatalogChangeCustomColumnUserNamePathParams struct {
	ColumnID string `pathParam:"style=simple,explode=false,name=columnId"`
	StoreID  string `pathParam:"style=simple,explode=false,name=storeId"`
}

type CatalogChangeCustomColumnUserNameRequest struct {
	PathParams CatalogChangeCustomColumnUserNamePathParams
	Request    shared.ChangeUserColumnNameRequest `request:"mediaType=application/json"`
}

type CatalogChangeCustomColumnUserNameResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
	ImportAlreadyInProgressResponse  *shared.ImportAlreadyInProgressResponse
}
