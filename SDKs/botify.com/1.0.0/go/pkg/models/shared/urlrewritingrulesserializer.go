package shared

type URLRewritingRulesSerializer struct {
	Rules []RewritingRuleSerializer `json:"rules"`
	Urls  []string                  `json:"urls"`
}
