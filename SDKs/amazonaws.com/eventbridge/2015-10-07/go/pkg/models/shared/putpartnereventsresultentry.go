package shared

// PutPartnerEventsResultEntry
// Represents an event that a partner tried to generate, but failed.
type PutPartnerEventsResultEntry struct {
	ErrorCode    map[string]interface{} `json:"ErrorCode,omitempty"`
	ErrorMessage *string                `json:"ErrorMessage,omitempty"`
	EventID      *string                `json:"EventId,omitempty"`
}
