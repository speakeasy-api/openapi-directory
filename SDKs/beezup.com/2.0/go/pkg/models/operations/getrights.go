package operations

import (
	"openapi/pkg/models/shared"
)

type GetRightsPathParams struct {
	StoreID string `pathParam:"style=simple,explode=false,name=storeId"`
}

type GetRightsRequest struct {
	PathParams GetRightsPathParams
}

type GetRightsResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
	FunctionalityRightInfos          []shared.FunctionalityRightInfo
}
