package shared

// OrganizationInvitationCreation
// The parameters to create an organization invitation
type OrganizationInvitationCreation struct {
	Email            *string                `json:"email,omitempty"`
	OrganizationRole *OrganizationRolesEnum `json:"organizationRole,omitempty"`
}
