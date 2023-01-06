package operations

import (
	"openapi/pkg/models/shared"
)

type GetOrderInvoicePdfRequest struct {
	Request shared.GetOrderInvoicePdfFromHTMLInvoiceURLRequest `request:"mediaType=application/json"`
}

type GetOrderInvoicePdfResponse struct {
	BeezUPCommonErrorResponseMessage                *shared.BeezUpCommonErrorResponseMessage
	ContentType                                     string
	GetOrderInvoicePdf200ApplicationPdfBinaryString []byte
	StatusCode                                      int64
	ErrorResponseMessage                            *shared.ErrorResponseMessage
}
