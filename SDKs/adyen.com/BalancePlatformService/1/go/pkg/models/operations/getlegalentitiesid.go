package operations

import (
	"openapi/pkg/models/shared"
)

type GetLegalEntitiesIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetLegalEntitiesIDSecurity struct {
	BasicAuth  *shared.SchemeBasicAuth  `security:"scheme,type=http,subtype=basic"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type GetLegalEntitiesIDRequest struct {
	PathParams GetLegalEntitiesIDPathParams
	Security   GetLegalEntitiesIDSecurity
}

type GetLegalEntitiesIDResponse struct {
	ContentType  string
	LegalEntity  *interface{}
	ServiceError *interface{}
	StatusCode   int64
}
