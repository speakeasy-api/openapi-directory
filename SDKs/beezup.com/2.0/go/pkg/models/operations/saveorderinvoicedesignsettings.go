package operations

import (
	"openapi/pkg/models/shared"
)

type SaveOrderInvoiceDesignSettingsRequest struct {
	Request shared.OrderInvoiceDesignSettings `request:"mediaType=application/json"`
}

type SaveOrderInvoiceDesignSettingsResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
	ErrorResponseMessage             *shared.ErrorResponseMessage
}
