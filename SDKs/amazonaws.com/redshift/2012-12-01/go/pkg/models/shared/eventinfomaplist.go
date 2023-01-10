package shared

// EventInfoMapList
// Describes event information.
type EventInfoMapList struct {
	EventCategories  []map[string]interface{}
	EventDescription *string
	EventID          *string
	Severity         *string
}
