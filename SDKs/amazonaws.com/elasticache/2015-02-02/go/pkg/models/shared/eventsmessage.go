package shared

// EventsMessage
// Represents the output of a <code>DescribeEvents</code> operation.
type EventsMessage struct {
	Events []map[string]interface{}
	Marker *string
}
