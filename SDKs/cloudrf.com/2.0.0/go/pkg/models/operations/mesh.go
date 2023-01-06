package operations

import (
	"openapi/pkg/models/shared"
)

type MeshQueryParams struct {
	Name    string `queryParam:"style=form,explode=true,name=name"`
	Network string `queryParam:"style=form,explode=true,name=network"`
}

type MeshSecurity struct {
	APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type MeshRequest struct {
	QueryParams MeshQueryParams
	Security    MeshSecurity
}

type MeshResponse struct {
	ContentType string
	StatusCode  int64
}
