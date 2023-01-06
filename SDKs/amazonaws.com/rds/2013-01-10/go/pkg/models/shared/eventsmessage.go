package shared

type EventsMessage struct {
	Events []map[string]interface{}
	Marker *string
}
