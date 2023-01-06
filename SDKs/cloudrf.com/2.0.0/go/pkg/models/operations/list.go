package operations

import (
	"openapi/pkg/models/shared"
)

type ListQueryParams struct {
	E *float32 `queryParam:"style=form,explode=true,name=e"`
	N *float32 `queryParam:"style=form,explode=true,name=n"`
	S *float32 `queryParam:"style=form,explode=true,name=s"`
	W *float32 `queryParam:"style=form,explode=true,name=w"`
}

type ListSecurity struct {
	APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type ListRequest struct {
	QueryParams ListQueryParams
	Security    ListSecurity
}

type ListResponse struct {
	ContentType string
	StatusCode  int64
}
