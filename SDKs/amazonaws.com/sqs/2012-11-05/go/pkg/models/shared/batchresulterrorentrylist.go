package shared

// BatchResultErrorEntryList
// Gives a detailed description of the result of an action on each entry in the request.
type BatchResultErrorEntryList struct {
	Code        string
	ID          string
	Message     *string
	SenderFault bool
}
