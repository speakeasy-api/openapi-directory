package operations

import (
	"openapi/pkg/models/shared"
)

type NetworkQueryParams struct {
	Alt int32    `queryParam:"style=form,explode=true,name=alt"`
	Lat float32  `queryParam:"style=form,explode=true,name=lat"`
	Lon float32  `queryParam:"style=form,explode=true,name=lon"`
	Nam string   `queryParam:"style=form,explode=true,name=nam"`
	Net string   `queryParam:"style=form,explode=true,name=net"`
	Rxg *float32 `queryParam:"style=form,explode=true,name=rxg"`
}

type NetworkSecurity struct {
	APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type NetworkRequest struct {
	QueryParams NetworkQueryParams
	Security    NetworkSecurity
}

type NetworkResponse struct {
	ContentType string
	StatusCode  int64
}
