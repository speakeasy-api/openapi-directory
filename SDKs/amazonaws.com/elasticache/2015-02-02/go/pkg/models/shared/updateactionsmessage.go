package shared

type UpdateActionsMessage struct {
	Marker        *string
	UpdateActions []UpdateActionList
}
