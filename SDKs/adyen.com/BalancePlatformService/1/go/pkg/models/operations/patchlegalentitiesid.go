package operations

import (
	"openapi/pkg/models/shared"
)

type PatchLegalEntitiesIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PatchLegalEntitiesIDSecurity struct {
	BasicAuth  *shared.SchemeBasicAuth  `security:"scheme,type=http,subtype=basic"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type PatchLegalEntitiesIDRequest struct {
	PathParams PatchLegalEntitiesIDPathParams
	Request    *interface{} `request:"mediaType=application/json"`
	Security   PatchLegalEntitiesIDSecurity
}

type PatchLegalEntitiesIDResponse struct {
	ContentType  string
	LegalEntity  *interface{}
	ServiceError *interface{}
	StatusCode   int64
}
