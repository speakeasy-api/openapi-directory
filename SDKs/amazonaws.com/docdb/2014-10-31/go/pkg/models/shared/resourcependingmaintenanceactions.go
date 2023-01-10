package shared

// ResourcePendingMaintenanceActions
// Represents the output of <a>ApplyPendingMaintenanceAction</a>.
type ResourcePendingMaintenanceActions struct {
	PendingMaintenanceActionDetails []PendingMaintenanceActionDetails
	ResourceIdentifier              *string
}
