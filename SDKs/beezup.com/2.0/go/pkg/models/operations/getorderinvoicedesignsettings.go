package operations

import (
	"openapi/pkg/models/shared"
)

type GetOrderInvoiceDesignSettingsResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
	ErrorResponseMessage             *shared.ErrorResponseMessage
	OrderInvoiceDesignSettings       *shared.OrderInvoiceDesignSettings
}
