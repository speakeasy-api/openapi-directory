package shared

// DestinyMilestonesDestinyMilestoneQuestActivity
// Sometimes, we know the specific activity that the Milestone wants you to play. This entity provides additional information about that Activity and all of its variants. (sometimes there's only one variant, but I think you get the point)
type DestinyMilestonesDestinyMilestoneQuestActivity struct {
	ActivityHash     *int64
	ActivityModeHash *int64
	ActivityModeType *int32
	ModifierHashes   []int64
	Variants         []DestinyMilestonesDestinyMilestoneActivityVariant
}

// DestinyMilestonesDestinyMilestoneQuestStatus
// Data regarding the progress of a Quest for a specific character. Quests are composed of multiple steps, each with potentially multiple objectives: this QuestStatus will return Objective data for the *currently active* step in this quest.
type DestinyMilestonesDestinyMilestoneQuestStatus struct {
	Completed      *bool
	ItemInstanceID *int64
	QuestHash      *int64
	Redeemed       *bool
	Started        *bool
	StepHash       *int64
	StepObjectives []DestinyQuestsDestinyObjectiveProgress
	Tracked        *bool
	VendorHash     *int64
}

// DestinyMilestonesDestinyMilestoneQuest
// If a Milestone has one or more Quests, this will contain the live information for the character's status with one of those quests.
type DestinyMilestonesDestinyMilestoneQuest struct {
	Activity      *DestinyMilestonesDestinyMilestoneQuestActivity
	Challenges    []DestinyChallengesDestinyChallengeStatus
	QuestItemHash *int64
	Status        *DestinyMilestonesDestinyMilestoneQuestStatus
}
