package shared

import (
	"time"
)

// DestinyEntitiesProfilesDestinyProfileComponentUserInfo
// This contract supplies basic information commonly used to display a minimal amount of information about a user. Take care to not add more properties here unless the property applies in all (or at least the majority) of the situations where UserInfoCard is used. Avoid adding game specific or platform specific details here. In cases where UserInfoCard is a subset of the data needed in a contract, use UserInfoCard as a property of other contracts.
type DestinyEntitiesProfilesDestinyProfileComponentUserInfo struct {
	ApplicableMembershipTypes []int32
	CrossSaveOverride         *int32
	DisplayName               *string
	IconPath                  *string
	IsPublic                  *bool
	MembershipID              *int64
	MembershipType            *int32
	SupplementalDisplayName   *string
}

// DestinyEntitiesProfilesDestinyProfileComponent
// The most essential summary information about a Profile (in Destiny 1, we called these "Accounts").
type DestinyEntitiesProfilesDestinyProfileComponent struct {
	CharacterIds                []int64
	CurrentSeasonHash           *int64
	CurrentSeasonRewardPowerCap *int32
	DateLastPlayed              *time.Time
	SeasonHashes                []int64
	UserInfo                    *DestinyEntitiesProfilesDestinyProfileComponentUserInfo
	VersionsOwned               *int32
}
