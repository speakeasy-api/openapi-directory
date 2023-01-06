package shared

// EventsMessage
//
//	Contains the result of a successful invocation of the <code>DescribeEvents</code> action.
type EventsMessage struct {
	Events []map[string]interface{}
	Marker *string
}
