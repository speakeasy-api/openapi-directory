package shared

// ResourcePendingMaintenanceActions
// Represents the output of <a>ApplyPendingMaintenanceAction</a>.
type ResourcePendingMaintenanceActions struct {
	PendingMaintenanceActionDetails []map[string]interface{}
	ResourceIdentifier              *string
}
