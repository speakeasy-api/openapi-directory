package shared

// CapacityUnitsConfiguration
// Specifies capacity units configured for your enterprise edition index. You can add and remove capacity units to tune an index to your requirements.
type CapacityUnitsConfiguration struct {
	QueryCapacityUnits   int64 `json:"QueryCapacityUnits"`
	StorageCapacityUnits int64 `json:"StorageCapacityUnits"`
}
