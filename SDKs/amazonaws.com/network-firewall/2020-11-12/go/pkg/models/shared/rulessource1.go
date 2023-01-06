package shared

// RulesSource1
// The stateless or stateful rules definitions for use in a single rule group. Each rule group requires a single <code>RulesSource</code>. You can use an instance of this for either stateless rules or stateful rules.
type RulesSource1 struct {
	RulesSourceList                *RulesSourceList1               `json:"RulesSourceList,omitempty"`
	RulesString                    *string                         `json:"RulesString,omitempty"`
	StatefulRules                  []StatefulRule                  `json:"StatefulRules,omitempty"`
	StatelessRulesAndCustomActions *StatelessRulesAndCustomActions `json:"StatelessRulesAndCustomActions,omitempty"`
}
