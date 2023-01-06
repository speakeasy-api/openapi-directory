package operations

import (
	"openapi/pkg/models/shared"
)

type GetBalancePlatformsIDAccountHoldersPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetBalancePlatformsIDAccountHoldersQueryParams struct {
	Limit  *int32 `queryParam:"style=form,explode=true,name=limit"`
	Offset *int32 `queryParam:"style=form,explode=true,name=offset"`
}

type GetBalancePlatformsIDAccountHoldersSecurity struct {
	BasicAuth  *shared.SchemeBasicAuth  `security:"scheme,type=http,subtype=basic"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type GetBalancePlatformsIDAccountHoldersRequest struct {
	PathParams  GetBalancePlatformsIDAccountHoldersPathParams
	QueryParams GetBalancePlatformsIDAccountHoldersQueryParams
	Security    GetBalancePlatformsIDAccountHoldersSecurity
}

type GetBalancePlatformsIDAccountHoldersResponse struct {
	ContentType                     string
	PaginatedAccountHoldersResponse *interface{}
	RestServiceError                *interface{}
	StatusCode                      int64
}
