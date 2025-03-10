package operations

import (
	"openapi/pkg/models/shared"
)

type CompaniesUpdatePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type CompaniesUpdateQueryParams struct {
	Raw *bool `queryParam:"style=form,explode=true,name=raw"`
}

type CompaniesUpdateHeaders struct {
	XApideckAppID      string  `header:"name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"name=x-apideck-service-id"`
}

type CompaniesUpdateSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type CompaniesUpdateRequest struct {
	PathParams  CompaniesUpdatePathParams
	QueryParams CompaniesUpdateQueryParams
	Headers     CompaniesUpdateHeaders
	Request     shared.HrisCompany `request:"mediaType=application/json"`
	Security    CompaniesUpdateSecurity
}

type CompaniesUpdateResponse struct {
	BadRequestResponse        *interface{}
	ContentType               string
	NotFoundResponse          *interface{}
	PaymentRequiredResponse   *interface{}
	StatusCode                int64
	UnauthorizedResponse      *interface{}
	UnexpectedErrorResponse   *interface{}
	UnprocessableResponse     *interface{}
	UpdateHrisCompanyResponse *shared.UpdateHrisCompanyResponse
}
