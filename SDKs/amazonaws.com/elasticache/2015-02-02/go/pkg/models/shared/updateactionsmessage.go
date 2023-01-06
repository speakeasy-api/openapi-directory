package shared

type UpdateActionsMessage struct {
	Marker        *string
	UpdateActions []map[string]interface{}
}
