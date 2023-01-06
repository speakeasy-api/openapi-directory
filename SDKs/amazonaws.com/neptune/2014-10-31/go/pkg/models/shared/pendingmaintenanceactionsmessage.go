package shared

type PendingMaintenanceActionsMessage struct {
	Marker                    *string
	PendingMaintenanceActions []map[string]interface{}
}
