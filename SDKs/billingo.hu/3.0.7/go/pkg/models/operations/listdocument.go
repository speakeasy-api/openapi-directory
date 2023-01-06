package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type ListDocumentQueryParams struct {
	BlockID       *int64                    `queryParam:"style=form,explode=true,name=block_id"`
	EndDate       *time.Time                `queryParam:"style=form,explode=true,name=end_date"`
	EndNumber     *int64                    `queryParam:"style=form,explode=true,name=end_number"`
	EndYear       *int64                    `queryParam:"style=form,explode=true,name=end_year"`
	Page          *int64                    `queryParam:"style=form,explode=true,name=page"`
	PartnerID     *int64                    `queryParam:"style=form,explode=true,name=partner_id"`
	PaymentMethod *shared.PaymentMethodEnum `queryParam:"style=form,explode=true,name=payment_method"`
	PaymentStatus *shared.PaymentStatusEnum `queryParam:"style=form,explode=true,name=payment_status"`
	PerPage       *int64                    `queryParam:"style=form,explode=true,name=per_page"`
	StartDate     *time.Time                `queryParam:"style=form,explode=true,name=start_date"`
	StartNumber   *int64                    `queryParam:"style=form,explode=true,name=start_number"`
	StartYear     *int64                    `queryParam:"style=form,explode=true,name=start_year"`
}

type ListDocumentRequest struct {
	QueryParams ListDocumentQueryParams
}

type ListDocumentResponse struct {
	ClientErrorResponse     *shared.ClientErrorResponse
	ContentType             string
	DocumentList            *shared.DocumentList
	Headers                 map[string][]string
	ServerErrorResponse     *shared.ServerErrorResponse
	StatusCode              int64
	ValidationErrorResponse *shared.ValidationErrorResponse
}
