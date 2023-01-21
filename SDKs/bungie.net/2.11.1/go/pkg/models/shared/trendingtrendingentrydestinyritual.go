package shared

import (
	"time"
)

// TrendingTrendingEntryDestinyRitualEventContent
// Represents localized, extended content related to Milestones. This is intentionally returned by a separate endpoint and not with Character-level Milestone data because we do not put localized data into standard Destiny responses, both for brevity of response and for caching purposes. If you really need this data, hit the Milestone Content endpoint.
type TrendingTrendingEntryDestinyRitualEventContent struct {
	About          *string
	ItemCategories []DestinyMilestonesDestinyMilestoneContentItemCategory
	Status         *string
	Tips           []string
}

// TrendingTrendingEntryDestinyRitualMilestoneDetails
// Information about milestones, presented in a character state-agnostic manner. Combine this data with DestinyMilestoneDefinition to get a full picture of the milestone, which is basically a checklist of things to do in the game. Think of this as GetPublicAdvisors 3.0, for those who used the Destiny 1 API.
type TrendingTrendingEntryDestinyRitualMilestoneDetails struct {
	Activities      []DestinyMilestonesDestinyPublicMilestoneChallengeActivity
	AvailableQuests []DestinyMilestonesDestinyPublicMilestoneQuest
	EndDate         *time.Time
	MilestoneHash   *int64
	Order           *int32
	StartDate       *time.Time
	VendorHashes    []int64
	Vendors         []DestinyMilestonesDestinyPublicMilestoneVendor
}

type TrendingTrendingEntryDestinyRitual struct {
	DateEnd          *time.Time
	DateStart        *time.Time
	EventContent     *TrendingTrendingEntryDestinyRitualEventContent
	Icon             *string
	Image            *string
	MilestoneDetails *TrendingTrendingEntryDestinyRitualMilestoneDetails
	Subtitle         *string
	Title            *string
}
