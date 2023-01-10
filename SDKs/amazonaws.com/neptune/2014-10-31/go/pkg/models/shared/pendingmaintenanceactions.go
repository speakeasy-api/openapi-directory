package shared

// PendingMaintenanceActions
// Describes the pending maintenance actions for a resource.
type PendingMaintenanceActions struct {
	PendingMaintenanceActionDetails []PendingMaintenanceActionDetails
	ResourceIdentifier              *string
}
