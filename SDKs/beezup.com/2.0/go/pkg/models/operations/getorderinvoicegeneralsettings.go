package operations

import (
	"openapi/pkg/models/shared"
)

type GetOrderInvoiceGeneralSettingsResponse struct {
	BeezUPCommonErrorResponseMessage       *shared.BeezUpCommonErrorResponseMessage
	ContentType                            string
	StatusCode                             int64
	ErrorResponseMessage                   *shared.ErrorResponseMessage
	GetOrderInvoiceGeneralSettingsResponse *shared.GetOrderInvoiceGeneralSettingsResponse
}
