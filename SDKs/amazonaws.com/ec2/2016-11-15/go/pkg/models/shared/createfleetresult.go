package shared

type CreateFleetResult struct {
	Errors    map[string]interface{}
	FleetID   map[string]interface{}
	Instances map[string]interface{}
}
