package shared

type EventsMessage struct {
	Events []EventList
	Marker *string
}
