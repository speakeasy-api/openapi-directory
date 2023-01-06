package shared

// PromptSpecification1
// Specifies a list of message groups that Amazon Lex sends to a user to elicit a response.
type PromptSpecification1 struct {
	AllowInterrupt *bool                  `json:"allowInterrupt,omitempty"`
	MaxRetries     int64                  `json:"maxRetries"`
	MessageGroups  map[string]interface{} `json:"messageGroups"`
}
