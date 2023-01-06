package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteStoreSharePathParams struct {
	StoreID string `pathParam:"style=simple,explode=false,name=storeId"`
	UserID  string `pathParam:"style=simple,explode=false,name=userId"`
}

type DeleteStoreShareRequest struct {
	PathParams DeleteStoreSharePathParams
}

type DeleteStoreShareResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
}
