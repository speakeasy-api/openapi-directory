package shared

type GetCapacityReservationUsageResult struct {
	AvailableInstanceCount map[string]interface{}
	CapacityReservationID  map[string]interface{}
	InstanceType           map[string]interface{}
	InstanceUsages         map[string]interface{}
	NextToken              map[string]interface{}
	State                  map[string]interface{}
	TotalInstanceCount     map[string]interface{}
}
