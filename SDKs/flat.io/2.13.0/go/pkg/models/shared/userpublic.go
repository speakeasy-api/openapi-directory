package shared

import (
	"time"
)

// UserPublic
// Public User details summary
type UserPublic struct {
	Bio                    *string    `json:"bio,omitempty"`
	CoverPicture           *string    `json:"coverPicture,omitempty"`
	FollowersCount         *int64     `json:"followersCount,omitempty"`
	FollowingCount         *int64     `json:"followingCount,omitempty"`
	Instruments            []string   `json:"instruments,omitempty"`
	LikedScoresCount       *int64     `json:"likedScoresCount,omitempty"`
	OwnedPublicScoresCount *int64     `json:"ownedPublicScoresCount,omitempty"`
	ProfileTheme           *string    `json:"profileTheme,omitempty"`
	RegistrationDate       *time.Time `json:"registrationDate,omitempty"`
}
