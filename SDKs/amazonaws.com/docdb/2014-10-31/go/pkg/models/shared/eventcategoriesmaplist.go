package shared

// EventCategoriesMapList
// An event source type, accompanied by one or more event category names.
type EventCategoriesMapList struct {
	EventCategories []map[string]interface{}
	SourceType      *string
}
