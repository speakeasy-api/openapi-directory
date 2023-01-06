package shared

type RuleList struct {
	Links RuleListLinks `json:"links"`
	Rules []Rule        `json:"rules"`
}
