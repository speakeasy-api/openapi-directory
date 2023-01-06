package operations

import (
	"openapi/pkg/models/shared"
)

type ListRoleMappingsResponse struct {
	ContentType  string
	Error        *shared.Error
	RoleMappings []shared.RoleMapping
	StatusCode   int64
}
