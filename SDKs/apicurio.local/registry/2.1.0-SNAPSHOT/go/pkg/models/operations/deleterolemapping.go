package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteRoleMappingPathParams struct {
	PrincipalID string `pathParam:"style=simple,explode=false,name=principalId"`
}

type DeleteRoleMappingRequest struct {
	PathParams DeleteRoleMappingPathParams
}

type DeleteRoleMappingResponse struct {
	ContentType string
	Error       *shared.Error
	StatusCode  int64
}
