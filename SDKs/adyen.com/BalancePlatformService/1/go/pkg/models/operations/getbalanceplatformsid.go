package operations

import (
	"openapi/pkg/models/shared"
)

type GetBalancePlatformsIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetBalancePlatformsIDSecurity struct {
	BasicAuth  *shared.SchemeBasicAuth  `security:"scheme,type=http,subtype=basic"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type GetBalancePlatformsIDRequest struct {
	PathParams GetBalancePlatformsIDPathParams
	Security   GetBalancePlatformsIDSecurity
}

type GetBalancePlatformsIDResponse struct {
	BalancePlatform  *interface{}
	ContentType      string
	RestServiceError *interface{}
	StatusCode       int64
}
