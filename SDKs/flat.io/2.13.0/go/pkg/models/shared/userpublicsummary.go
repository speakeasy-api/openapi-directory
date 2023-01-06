package shared

// UserPublicSummary
// Public User details summary
type UserPublicSummary struct {
	ClassRole        *ClassRolesEnum        `json:"classRole,omitempty"`
	HTMLURL          *string                `json:"htmlUrl,omitempty"`
	Organization     *string                `json:"organization,omitempty"`
	OrganizationRole *OrganizationRolesEnum `json:"organizationRole,omitempty"`
}
