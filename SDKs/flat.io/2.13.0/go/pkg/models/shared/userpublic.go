package shared

import (
	"time"
)

type UserPublicTypeEnum string

const (
	UserPublicTypeEnumUser  UserPublicTypeEnum = "user"
	UserPublicTypeEnumGuest UserPublicTypeEnum = "guest"
)

// UserPublic
// Public User details summary
type UserPublic struct {
	Bio                    *string                `json:"bio,omitempty"`
	ClassRole              *ClassRolesEnum        `json:"classRole,omitempty"`
	CoverPicture           *string                `json:"coverPicture,omitempty"`
	Firstname              *string                `json:"firstname,omitempty"`
	FollowersCount         *int64                 `json:"followersCount,omitempty"`
	FollowingCount         *int64                 `json:"followingCount,omitempty"`
	HTMLURL                *string                `json:"htmlUrl,omitempty"`
	ID                     *string                `json:"id,omitempty"`
	Instruments            []string               `json:"instruments,omitempty"`
	IsFlatTeam             *bool                  `json:"isFlatTeam,omitempty"`
	IsPowerUser            *bool                  `json:"isPowerUser,omitempty"`
	Lastname               *string                `json:"lastname,omitempty"`
	LikedScoresCount       *int64                 `json:"likedScoresCount,omitempty"`
	Name                   *string                `json:"name,omitempty"`
	Organization           *string                `json:"organization,omitempty"`
	OrganizationRole       *OrganizationRolesEnum `json:"organizationRole,omitempty"`
	OwnedPublicScoresCount *int64                 `json:"ownedPublicScoresCount,omitempty"`
	Picture                *string                `json:"picture,omitempty"`
	PrintableName          *string                `json:"printableName,omitempty"`
	ProfileTheme           *string                `json:"profileTheme,omitempty"`
	RegistrationDate       *time.Time             `json:"registrationDate,omitempty"`
	Type                   *UserPublicTypeEnum    `json:"type,omitempty"`
	Username               *string                `json:"username,omitempty"`
}
