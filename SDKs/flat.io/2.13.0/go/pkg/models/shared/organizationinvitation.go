package shared

// OrganizationInvitation
// Details of an invitation to join an organization
type OrganizationInvitation struct {
	CustomCode       *string                `json:"customCode,omitempty"`
	Email            *string                `json:"email,omitempty"`
	ID               *string                `json:"id,omitempty"`
	InvitedBy        *string                `json:"invitedBy,omitempty"`
	Organization     *string                `json:"organization,omitempty"`
	OrganizationRole *OrganizationRolesEnum `json:"organizationRole,omitempty"`
	UsedBy           *string                `json:"usedBy,omitempty"`
}
