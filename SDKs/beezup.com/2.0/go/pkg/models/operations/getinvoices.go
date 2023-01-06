package operations

import (
	"openapi/pkg/models/shared"
)

type GetInvoicesHeaders struct {
	IfNoneMatch *string `header:"style=simple,explode=false,name=If-None-Match"`
}

type GetInvoicesRequest struct {
	Headers GetInvoicesHeaders
}

type GetInvoicesResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	Headers                          map[string][]string
	StatusCode                       int64
	InvoiceList                      *shared.InvoiceList
}
