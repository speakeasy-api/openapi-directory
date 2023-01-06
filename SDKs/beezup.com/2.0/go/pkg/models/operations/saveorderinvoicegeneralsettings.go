package operations

import (
	"openapi/pkg/models/shared"
)

type SaveOrderInvoiceGeneralSettingsRequest struct {
	Request shared.OrderInvoiceGeneralSettings `request:"mediaType=application/json"`
}

type SaveOrderInvoiceGeneralSettingsResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
	ErrorResponseMessage             *shared.ErrorResponseMessage
}
