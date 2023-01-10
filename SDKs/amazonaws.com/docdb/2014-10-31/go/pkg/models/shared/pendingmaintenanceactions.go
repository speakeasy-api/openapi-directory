package shared

// PendingMaintenanceActions
// Represents the output of <a>ApplyPendingMaintenanceAction</a>.
type PendingMaintenanceActions struct {
	PendingMaintenanceActionDetails []PendingMaintenanceActionDetails
	ResourceIdentifier              *string
}
