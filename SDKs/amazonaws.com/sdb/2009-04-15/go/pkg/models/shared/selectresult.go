package shared

type SelectResult struct {
	Items     []map[string]interface{}
	NextToken *string
}
