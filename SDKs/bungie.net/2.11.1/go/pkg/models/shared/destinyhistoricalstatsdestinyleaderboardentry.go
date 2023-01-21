package shared

// DestinyHistoricalStatsDestinyLeaderboardEntryPlayerBungieNetUserInfo
// This contract supplies basic information commonly used to display a minimal amount of information about a user. Take care to not add more properties here unless the property applies in all (or at least the majority) of the situations where UserInfoCard is used. Avoid adding game specific or platform specific details here. In cases where UserInfoCard is a subset of the data needed in a contract, use UserInfoCard as a property of other contracts.
type DestinyHistoricalStatsDestinyLeaderboardEntryPlayerBungieNetUserInfo struct {
	ApplicableMembershipTypes []int32
	CrossSaveOverride         *int32
	DisplayName               *string
	IconPath                  *string
	IsPublic                  *bool
	MembershipID              *int64
	MembershipType            *int32
	SupplementalDisplayName   *string
}

// DestinyHistoricalStatsDestinyLeaderboardEntryPlayerDestinyUserInfo
// This contract supplies basic information commonly used to display a minimal amount of information about a user. Take care to not add more properties here unless the property applies in all (or at least the majority) of the situations where UserInfoCard is used. Avoid adding game specific or platform specific details here. In cases where UserInfoCard is a subset of the data needed in a contract, use UserInfoCard as a property of other contracts.
type DestinyHistoricalStatsDestinyLeaderboardEntryPlayerDestinyUserInfo struct {
	ApplicableMembershipTypes []int32
	CrossSaveOverride         *int32
	DisplayName               *string
	IconPath                  *string
	IsPublic                  *bool
	MembershipID              *int64
	MembershipType            *int32
	SupplementalDisplayName   *string
}

// DestinyHistoricalStatsDestinyLeaderboardEntryPlayer
// Identity details of the player
type DestinyHistoricalStatsDestinyLeaderboardEntryPlayer struct {
	BungieNetUserInfo *DestinyHistoricalStatsDestinyLeaderboardEntryPlayerBungieNetUserInfo
	CharacterClass    *string
	CharacterLevel    *int32
	ClanName          *string
	ClanTag           *string
	ClassHash         *int64
	DestinyUserInfo   *DestinyHistoricalStatsDestinyLeaderboardEntryPlayerDestinyUserInfo
	EmblemHash        *int64
	GenderHash        *int64
	LightLevel        *int32
	RaceHash          *int64
}

// DestinyHistoricalStatsDestinyLeaderboardEntryValueBasic
// Basic stat value.
type DestinyHistoricalStatsDestinyLeaderboardEntryValueBasic struct {
	DisplayValue *string
	Value        *float64
}

// DestinyHistoricalStatsDestinyLeaderboardEntryValuePga
// Per game average for the statistic, if applicable
type DestinyHistoricalStatsDestinyLeaderboardEntryValuePga struct {
	DisplayValue *string
	Value        *float64
}

// DestinyHistoricalStatsDestinyLeaderboardEntryValueWeighted
// Weighted value of the stat if a weight greater than 1 has been assigned.
type DestinyHistoricalStatsDestinyLeaderboardEntryValueWeighted struct {
	DisplayValue *string
	Value        *float64
}

// DestinyHistoricalStatsDestinyLeaderboardEntryValue
// Value of the stat for this player
type DestinyHistoricalStatsDestinyLeaderboardEntryValue struct {
	ActivityID *int64
	Basic      *DestinyHistoricalStatsDestinyLeaderboardEntryValueBasic
	Pga        *DestinyHistoricalStatsDestinyLeaderboardEntryValuePga
	StatID     *string
	Weighted   *DestinyHistoricalStatsDestinyLeaderboardEntryValueWeighted
}

type DestinyHistoricalStatsDestinyLeaderboardEntry struct {
	CharacterID *int64
	Player      *DestinyHistoricalStatsDestinyLeaderboardEntryPlayer
	Rank        *int32
	Value       *DestinyHistoricalStatsDestinyLeaderboardEntryValue
}
