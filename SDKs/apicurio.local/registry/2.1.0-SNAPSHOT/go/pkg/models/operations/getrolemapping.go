package operations

import (
	"openapi/pkg/models/shared"
)

type GetRoleMappingPathParams struct {
	PrincipalID string `pathParam:"style=simple,explode=false,name=principalId"`
}

type GetRoleMappingRequest struct {
	PathParams GetRoleMappingPathParams
}

type GetRoleMappingResponse struct {
	ContentType string
	Error       *shared.Error
	RoleMapping *shared.RoleMapping
	StatusCode  int64
}
