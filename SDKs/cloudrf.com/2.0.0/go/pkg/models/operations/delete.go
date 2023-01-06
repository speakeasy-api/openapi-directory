package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteQueryParams struct {
	Cid int64 `queryParam:"style=form,explode=true,name=cid"`
}

type DeleteSecurity struct {
	APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type DeleteRequest struct {
	QueryParams DeleteQueryParams
	Security    DeleteSecurity
}

type DeleteResponse struct {
	ContentType string
	StatusCode  int64
}
