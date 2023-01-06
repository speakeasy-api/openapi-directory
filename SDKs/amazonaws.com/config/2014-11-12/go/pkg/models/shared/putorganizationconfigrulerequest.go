package shared

type PutOrganizationConfigRuleRequest struct {
	ExcludedAccounts                []string                          `json:"ExcludedAccounts,omitempty"`
	OrganizationConfigRuleName      string                            `json:"OrganizationConfigRuleName"`
	OrganizationCustomRuleMetadata  *OrganizationCustomRuleMetadata   `json:"OrganizationCustomRuleMetadata,omitempty"`
	OrganizationManagedRuleMetadata *OrganizationManagedRuleMetadata1 `json:"OrganizationManagedRuleMetadata,omitempty"`
}
