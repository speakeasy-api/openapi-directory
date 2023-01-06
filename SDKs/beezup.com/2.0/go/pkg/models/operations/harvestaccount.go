package operations

import (
	"openapi/pkg/models/shared"
)

type HarvestAccountPathParams struct {
	AccountID                int32  `pathParam:"style=simple,explode=false,name=accountId"`
	MarketplaceTechnicalCode string `pathParam:"style=simple,explode=false,name=marketplaceTechnicalCode"`
}

type HarvestAccountQueryParams struct {
	BeezUPOrderID      *string `queryParam:"style=form,explode=true,name=beezUPOrderId"`
	MarketplaceOrderID *string `queryParam:"style=form,explode=true,name=marketplaceOrderId"`
}

type HarvestAccountRequest struct {
	PathParams  HarvestAccountPathParams
	QueryParams HarvestAccountQueryParams
}

type HarvestAccountResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	Headers                          map[string][]string
	StatusCode                       int64
	ErrorResponseMessage             *shared.ErrorResponseMessage
}
