package shared

// DestinyMilestonesDestinyMilestoneActivityVariantCompletionStatus
// Represents this player's personal completion status for the Activity under a Milestone, if the activity has trackable completion and progress information. (most activities won't, or the concept won't apply. For instance, it makes sense to talk about a tier of a raid as being Completed or having progress, but it doesn't make sense to talk about a Crucible Playlist in those terms.
type DestinyMilestonesDestinyMilestoneActivityVariantCompletionStatus struct {
	Completed *bool
	Phases    []DestinyMilestonesDestinyMilestoneActivityPhase
}

// DestinyMilestonesDestinyMilestoneActivityVariant
// Represents custom data that we know about an individual variant of an activity.
type DestinyMilestonesDestinyMilestoneActivityVariant struct {
	ActivityHash     *int64
	ActivityModeHash *int64
	ActivityModeType *int32
	CompletionStatus *DestinyMilestonesDestinyMilestoneActivityVariantCompletionStatus
}
