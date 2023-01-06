package operations

import (
	"openapi/pkg/models/shared"
)

type GetOrderInvoicePreviewPathParams struct {
	AccountID                string `pathParam:"style=simple,explode=false,name=accountId"`
	BeezUPOrderUUID          string `pathParam:"style=simple,explode=false,name=beezUPOrderUUID"`
	MarketplaceTechnicalCode string `pathParam:"style=simple,explode=false,name=marketplaceTechnicalCode"`
}

type GetOrderInvoicePreviewHeaders struct {
	AcceptEncoding string `header:"style=simple,explode=false,name=Accept-Encoding"`
}

type GetOrderInvoicePreviewRequest struct {
	PathParams GetOrderInvoicePreviewPathParams
	Headers    GetOrderInvoicePreviewHeaders
	Request    shared.PreviewOrderInvoiceRequest `request:"mediaType=application/json"`
}

type GetOrderInvoicePreviewResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
	ErrorResponseMessage             *shared.ErrorResponseMessage
	PreviewOrderInvoiceResponse      *shared.PreviewOrderInvoiceResponse
}
