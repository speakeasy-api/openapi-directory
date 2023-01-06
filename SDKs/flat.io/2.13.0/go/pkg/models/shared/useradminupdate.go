package shared

// UserAdminUpdate
// User update as an organization admin
type UserAdminUpdate struct {
	Email            *string                `json:"email,omitempty"`
	Firstname        *string                `json:"firstname,omitempty"`
	Lastname         *string                `json:"lastname,omitempty"`
	OrganizationRole *OrganizationRolesEnum `json:"organizationRole,omitempty"`
	Password         *string                `json:"password,omitempty"`
	Username         *string                `json:"username,omitempty"`
}
