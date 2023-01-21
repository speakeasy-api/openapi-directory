package shared

// ResolvedAttributes
// The resolved attributes.
type ResolvedAttributes struct {
	AutoMLJobObjective *AutoMlJobObjective          `json:"AutoMLJobObjective,omitempty"`
	CompletionCriteria *AutoMlJobCompletionCriteria `json:"CompletionCriteria,omitempty"`
	ProblemType        *ProblemTypeEnum             `json:"ProblemType,omitempty"`
}
