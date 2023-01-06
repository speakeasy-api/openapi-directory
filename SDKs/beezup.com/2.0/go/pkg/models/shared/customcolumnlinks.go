package shared

type CustomColumnLinks struct {
	Delete         map[string]interface{} `json:"delete"`
	Expression     map[string]interface{} `json:"expression"`
	Rename         map[string]interface{} `json:"rename"`
	Save           map[string]interface{} `json:"save"`
	SaveExpression map[string]interface{} `json:"saveExpression"`
}
