package shared

// DestinyMilestonesDestinyPublicMilestoneQuestActivity
// A milestone may have one or more conceptual Activities associated with it, and each of those conceptual activities could have a variety of variants, modes, tiers, what-have-you. Our attempts to determine what qualifies as a conceptual activity are, unfortunately, janky. So if you see missing modes or modes that don't seem appropriate to you, let us know and I'll buy you a beer if we ever meet up in person.
type DestinyMilestonesDestinyPublicMilestoneQuestActivity struct {
	ActivityHash     *int64
	ActivityModeHash *int64
	ActivityModeType *int32
	ModifierHashes   []int64
	Variants         []DestinyMilestonesDestinyPublicMilestoneActivityVariant
}

type DestinyMilestonesDestinyPublicMilestoneQuest struct {
	Activity      *DestinyMilestonesDestinyPublicMilestoneQuestActivity
	Challenges    []DestinyMilestonesDestinyPublicMilestoneChallenge
	QuestItemHash *int64
}
