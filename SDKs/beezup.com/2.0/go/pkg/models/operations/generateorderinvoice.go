package operations

import (
	"openapi/pkg/models/shared"
)

type GenerateOrderInvoicePathParams struct {
	AccountID                string `pathParam:"style=simple,explode=false,name=accountId"`
	BeezUPOrderUUID          string `pathParam:"style=simple,explode=false,name=beezUPOrderUUID"`
	MarketplaceTechnicalCode string `pathParam:"style=simple,explode=false,name=marketplaceTechnicalCode"`
}

type GenerateOrderInvoiceQueryParams struct {
	UserName string `queryParam:"style=form,explode=true,name=userName"`
}

type GenerateOrderInvoiceRequest struct {
	PathParams  GenerateOrderInvoicePathParams
	QueryParams GenerateOrderInvoiceQueryParams
	Request     shared.GenerateOrderInvoiceRequest `request:"mediaType=application/json"`
}

type GenerateOrderInvoiceResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	Headers                          map[string][]string
	StatusCode                       int64
	ErrorResponseMessage             *shared.ErrorResponseMessage
}
