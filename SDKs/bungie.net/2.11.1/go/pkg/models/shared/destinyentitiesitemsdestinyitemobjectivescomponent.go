package shared

import (
	"time"
)

// DestinyEntitiesItemsDestinyItemObjectivesComponentFlavorObjective
// Returns data about a character's status with a given Objective. Combine with DestinyObjectiveDefinition static data for display purposes.
type DestinyEntitiesItemsDestinyItemObjectivesComponentFlavorObjective struct {
	ActivityHash    *int64
	Complete        *bool
	CompletionValue *int32
	DestinationHash *int64
	ObjectiveHash   *int64
	Progress        *int32
	Visible         *bool
}

// DestinyEntitiesItemsDestinyItemObjectivesComponent
// Items can have objectives and progression. When you request this block, you will obtain information about any Objectives and progression tied to this item.
type DestinyEntitiesItemsDestinyItemObjectivesComponent struct {
	DateCompleted   *time.Time
	FlavorObjective *DestinyEntitiesItemsDestinyItemObjectivesComponentFlavorObjective
	Objectives      []DestinyQuestsDestinyObjectiveProgress
}
