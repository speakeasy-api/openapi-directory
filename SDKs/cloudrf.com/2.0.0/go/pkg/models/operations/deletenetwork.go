package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteNetworkQueryParams struct {
	Nid string `queryParam:"style=form,explode=true,name=nid"`
}

type DeleteNetworkSecurity struct {
	APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type DeleteNetworkRequest struct {
	QueryParams DeleteNetworkQueryParams
	Security    DeleteNetworkSecurity
}

type DeleteNetworkResponse struct {
	ContentType string
	StatusCode  int64
}
