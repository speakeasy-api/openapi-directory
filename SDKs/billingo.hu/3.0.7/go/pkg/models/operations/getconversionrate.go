package operations

import (
	"openapi/pkg/models/shared"
)

type GetConversionRateQueryParams struct {
	From shared.CurrencyEnum `queryParam:"style=form,explode=true,name=from"`
	To   shared.CurrencyEnum `queryParam:"style=form,explode=true,name=to"`
}

type GetConversionRateRequest struct {
	QueryParams GetConversionRateQueryParams
}

type GetConversionRateResponse struct {
	ClientErrorResponse     *shared.ClientErrorResponse
	ContentType             string
	ConversationRate        *shared.ConversationRate
	Headers                 map[string][]string
	ServerErrorResponse     *shared.ServerErrorResponse
	StatusCode              int64
	ValidationErrorResponse *shared.ValidationErrorResponse
}
