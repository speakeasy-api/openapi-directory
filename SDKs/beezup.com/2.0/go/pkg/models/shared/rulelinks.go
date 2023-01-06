package shared

// RuleLinks
// Links to retrieve/action on other entities
type RuleLinks struct {
	Delete       map[string]interface{} `json:"delete,omitempty"`
	Disable      map[string]interface{} `json:"disable,omitempty"`
	Enable       map[string]interface{} `json:"enable,omitempty"`
	Movedown     map[string]interface{} `json:"movedown,omitempty"`
	Moveup       map[string]interface{} `json:"moveup,omitempty"`
	ReportFilter map[string]interface{} `json:"reportFilter,omitempty"`
	Run          map[string]interface{} `json:"run,omitempty"`
	Self         map[string]interface{} `json:"self"`
	Update       map[string]interface{} `json:"update,omitempty"`
}
