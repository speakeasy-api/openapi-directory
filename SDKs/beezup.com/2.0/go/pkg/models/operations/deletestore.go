package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteStorePathParams struct {
	StoreID string `pathParam:"style=simple,explode=false,name=storeId"`
}

type DeleteStoreRequest struct {
	PathParams DeleteStorePathParams
}

type DeleteStoreResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
}
