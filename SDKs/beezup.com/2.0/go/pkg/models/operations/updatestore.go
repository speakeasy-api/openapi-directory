package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateStorePathParams struct {
	StoreID string `pathParam:"style=simple,explode=false,name=storeId"`
}

type UpdateStoreRequest struct {
	PathParams UpdateStorePathParams
	Request    shared.UpdateStoreRequest `request:"mediaType=application/json"`
}

type UpdateStoreResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
}
