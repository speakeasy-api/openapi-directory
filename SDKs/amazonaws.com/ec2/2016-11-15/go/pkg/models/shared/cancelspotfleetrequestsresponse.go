package shared

// CancelSpotFleetRequestsResponse
// Contains the output of CancelSpotFleetRequests.
type CancelSpotFleetRequestsResponse struct {
	SuccessfulFleetRequests   map[string]interface{}
	UnsuccessfulFleetRequests map[string]interface{}
}
