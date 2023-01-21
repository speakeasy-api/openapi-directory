package shared

// DestinyComponentsPresentationDestinyPresentationNodeComponentObjective
// Returns data about a character's status with a given Objective. Combine with DestinyObjectiveDefinition static data for display purposes.
type DestinyComponentsPresentationDestinyPresentationNodeComponentObjective struct {
	ActivityHash    *int64
	Complete        *bool
	CompletionValue *int32
	DestinationHash *int64
	ObjectiveHash   *int64
	Progress        *int32
	Visible         *bool
}

type DestinyComponentsPresentationDestinyPresentationNodeComponent struct {
	CompletionValue     *int32
	Objective           *DestinyComponentsPresentationDestinyPresentationNodeComponentObjective
	ProgressValue       *int32
	RecordCategoryScore *int32
	State               *int32
}
