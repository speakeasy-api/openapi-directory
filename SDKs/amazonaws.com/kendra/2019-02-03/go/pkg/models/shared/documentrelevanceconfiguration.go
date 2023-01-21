package shared

// DocumentRelevanceConfiguration
// Overrides the document relevance properties of a custom index field.
type DocumentRelevanceConfiguration struct {
	Name      string    `json:"Name"`
	Relevance Relevance `json:"Relevance"`
}
