package shared

// DestinyComponentsKiosksDestinyKioskItemFlavorObjective
// Returns data about a character's status with a given Objective. Combine with DestinyObjectiveDefinition static data for display purposes.
type DestinyComponentsKiosksDestinyKioskItemFlavorObjective struct {
	ActivityHash    *int64
	Complete        *bool
	CompletionValue *int32
	DestinationHash *int64
	ObjectiveHash   *int64
	Progress        *int32
	Visible         *bool
}

type DestinyComponentsKiosksDestinyKioskItem struct {
	CanAcquire      *bool
	FailureIndexes  []int32
	FlavorObjective *DestinyComponentsKiosksDestinyKioskItemFlavorObjective
	Index           *int32
}
