package shared

// RuleListLinks
// Links to know if the user can create a rule or run all rules
type RuleListLinks struct {
	Create  LinksCreateRuleLink         `json:"create"`
	History LinksGetRulesExecutionsLink `json:"history"`
	Run     LinksRunRulesLink           `json:"run"`
	Self    LinksGetRulesLink           `json:"self"`
}
