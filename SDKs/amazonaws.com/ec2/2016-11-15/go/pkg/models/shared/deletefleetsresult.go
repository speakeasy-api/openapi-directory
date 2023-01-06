package shared

type DeleteFleetsResult struct {
	SuccessfulFleetDeletions   map[string]interface{}
	UnsuccessfulFleetDeletions map[string]interface{}
}
