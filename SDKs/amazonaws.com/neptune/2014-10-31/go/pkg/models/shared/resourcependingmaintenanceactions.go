package shared

// ResourcePendingMaintenanceActions
// Describes the pending maintenance actions for a resource.
type ResourcePendingMaintenanceActions struct {
	PendingMaintenanceActionDetails []map[string]interface{}
	ResourceIdentifier              *string
}
