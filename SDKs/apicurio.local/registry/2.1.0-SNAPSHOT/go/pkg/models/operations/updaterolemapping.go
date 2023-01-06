package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateRoleMappingPathParams struct {
	PrincipalID string `pathParam:"style=simple,explode=false,name=principalId"`
}

type UpdateRoleMappingRequest struct {
	PathParams UpdateRoleMappingPathParams
	Request    shared.UpdateRole `request:"mediaType=application/json"`
}

type UpdateRoleMappingResponse struct {
	ContentType string
	Error       *shared.Error
	StatusCode  int64
}
