package shared

// FilteredLogEvent
// Represents a matched event.
type FilteredLogEvent struct {
	EventID       map[string]interface{} `json:"eventId,omitempty"`
	IngestionTime *int64                 `json:"ingestionTime,omitempty"`
	LogStreamName *string                `json:"logStreamName,omitempty"`
	Message       *string                `json:"message,omitempty"`
	Timestamp     *int64                 `json:"timestamp,omitempty"`
}
