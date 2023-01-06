package shared

// EventsMessage
// Represents the output of <a>DescribeEvents</a>.
type EventsMessage struct {
	Events []map[string]interface{}
	Marker *string
}
