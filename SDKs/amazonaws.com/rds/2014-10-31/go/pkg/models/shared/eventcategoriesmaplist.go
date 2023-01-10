package shared

// EventCategoriesMapList
// Contains the results of a successful invocation of the <code>DescribeEventCategories</code> operation.
type EventCategoriesMapList struct {
	EventCategories []map[string]interface{}
	SourceType      *string
}
