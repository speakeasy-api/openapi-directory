package operations

import (
	"openapi/pkg/models/shared"
)

type GetSearchQueryParams struct {
	Q string `queryParam:"style=form,explode=true,name=q"`
}

type GetSearchSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=query"`
}

type GetSearchRequest struct {
	QueryParams GetSearchQueryParams
	Security    GetSearchSecurity
}

type GetSearchResponse struct {
	ContentType                    string
	StatusCode                     int64
	GetSearch200ApplicationJSONAny *interface{}
}
