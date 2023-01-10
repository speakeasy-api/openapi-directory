package shared

// ResourcePendingMaintenanceActions
// Describes the pending maintenance actions for a resource.
type ResourcePendingMaintenanceActions struct {
	PendingMaintenanceActionDetails []PendingMaintenanceActionDetails
	ResourceIdentifier              *string
}
