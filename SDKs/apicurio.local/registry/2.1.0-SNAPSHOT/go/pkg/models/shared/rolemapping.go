package shared

// RoleMapping
// The mapping between a user/principal and their role.
type RoleMapping struct {
	PrincipalID string       `json:"principalId"`
	Role        RoleTypeEnum `json:"role"`
}
