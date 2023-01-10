package shared

type UserPublicSummaryTypeEnum string

const (
	UserPublicSummaryTypeEnumUser  UserPublicSummaryTypeEnum = "user"
	UserPublicSummaryTypeEnumGuest UserPublicSummaryTypeEnum = "guest"
)

// UserPublicSummary
// Public User details summary
type UserPublicSummary struct {
	ClassRole        *ClassRolesEnum            `json:"classRole,omitempty"`
	Firstname        *string                    `json:"firstname,omitempty"`
	HTMLURL          *string                    `json:"htmlUrl,omitempty"`
	ID               *string                    `json:"id,omitempty"`
	IsFlatTeam       *bool                      `json:"isFlatTeam,omitempty"`
	IsPowerUser      *bool                      `json:"isPowerUser,omitempty"`
	Lastname         *string                    `json:"lastname,omitempty"`
	Name             *string                    `json:"name,omitempty"`
	Organization     *string                    `json:"organization,omitempty"`
	OrganizationRole *OrganizationRolesEnum     `json:"organizationRole,omitempty"`
	Picture          *string                    `json:"picture,omitempty"`
	PrintableName    *string                    `json:"printableName,omitempty"`
	Type             *UserPublicSummaryTypeEnum `json:"type,omitempty"`
	Username         *string                    `json:"username,omitempty"`
}
