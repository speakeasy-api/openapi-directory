package shared

// EventCategoriesMapList
// Contains the results of a successful invocation of the <a>DescribeEventCategories</a> action.
type EventCategoriesMapList struct {
	EventCategories []map[string]interface{}
	SourceType      *string
}
