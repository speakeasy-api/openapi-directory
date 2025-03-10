// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// DestinyMilestonesDestinyMilestoneRewardCategory - Represents a category of "summary" rewards that can be earned for the Milestone regardless of specific quest rewards that can be earned.
type DestinyMilestonesDestinyMilestoneRewardCategory struct {
	// The individual reward entries for this category, and their status.
	Entries []DestinyMilestonesDestinyMilestoneRewardEntry
	// Look up the relevant DestinyMilestoneDefinition, and then use rewardCategoryHash to look up the category info in DestinyMilestoneDefinition.rewards.
	RewardCategoryHash *int64
}
