package shared

type RewritingRuleSerializer struct {
	IgnoreCase bool   `json:"ignore_case"`
	Regex      string `json:"regex"`
	Replace    string `json:"replace"`
}
