package shared

// RuleListLinks
// Links to know if the user can create a rule or run all rules
type RuleListLinks struct {
	Create  map[string]interface{} `json:"create"`
	History map[string]interface{} `json:"history"`
	Run     map[string]interface{} `json:"run"`
	Self    map[string]interface{} `json:"self"`
}
