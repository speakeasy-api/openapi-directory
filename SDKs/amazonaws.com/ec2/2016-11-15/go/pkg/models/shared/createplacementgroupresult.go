package shared

// CreatePlacementGroupResultPlacementGroup
// Describes a placement group.
type CreatePlacementGroupResultPlacementGroup struct {
	GroupID        map[string]interface{}
	GroupName      map[string]interface{}
	PartitionCount map[string]interface{}
	State          map[string]interface{}
	Strategy       map[string]interface{}
	Tags           map[string]interface{}
}

type CreatePlacementGroupResult struct {
	PlacementGroup *CreatePlacementGroupResultPlacementGroup
}
