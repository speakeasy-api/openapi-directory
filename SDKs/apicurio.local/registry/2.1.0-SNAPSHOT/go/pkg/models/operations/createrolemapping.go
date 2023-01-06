package operations

import (
	"openapi/pkg/models/shared"
)

type CreateRoleMappingRequest struct {
	Request shared.RoleMapping `request:"mediaType=application/json"`
}

type CreateRoleMappingResponse struct {
	ContentType string
	Error       *shared.Error
	StatusCode  int64
}
