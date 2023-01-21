package shared

// GroupDefinition
// Represents a group when you specify a group by criteria or in the response to a query with a specific grouping.
type GroupDefinition struct {
	Key  *string                  `json:"Key,omitempty"`
	Type *GroupDefinitionTypeEnum `json:"Type,omitempty"`
}
