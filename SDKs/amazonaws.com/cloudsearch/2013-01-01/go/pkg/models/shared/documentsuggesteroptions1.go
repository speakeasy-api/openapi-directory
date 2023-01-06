package shared

// DocumentSuggesterOptions1
// Options for a search suggester.
type DocumentSuggesterOptions1 struct {
	FuzzyMatching  map[string]interface{}
	SortExpression *string
	SourceField    string
}
