package operations

import (
	"openapi/pkg/models/shared"
)

type InterferenceQueryParams struct {
	Name    string `queryParam:"style=form,explode=true,name=name"`
	Network string `queryParam:"style=form,explode=true,name=network"`
}

type InterferenceSecurity struct {
	APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type InterferenceRequest struct {
	QueryParams InterferenceQueryParams
	Security    InterferenceSecurity
}

type InterferenceResponse struct {
	ContentType string
	StatusCode  int64
}
