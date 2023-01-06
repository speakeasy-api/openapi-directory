package operations

import (
	"openapi/pkg/models/shared"
)

type GetOrderInvoiceDesignSettingsPreviewHeaders struct {
	AcceptEncoding string `header:"style=simple,explode=false,name=Accept-Encoding"`
}

type GetOrderInvoiceDesignSettingsPreviewRequest struct {
	Headers GetOrderInvoiceDesignSettingsPreviewHeaders
	Request shared.OrderInvoiceDesignSettings `request:"mediaType=application/json"`
}

type GetOrderInvoiceDesignSettingsPreviewResponse struct {
	BeezUPCommonErrorResponseMessage     *shared.BeezUpCommonErrorResponseMessage
	ContentType                          string
	StatusCode                           int64
	ErrorResponseMessage                 *shared.ErrorResponseMessage
	GetOrderInvoiceDesignPreviewResponse *shared.GetOrderInvoiceDesignPreviewResponse
}
