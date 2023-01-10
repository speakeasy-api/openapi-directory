package shared

type DisassociateResolverRuleRequest struct {
	ResolverRuleID string `json:"ResolverRuleId"`
	VPCID          string `json:"VPCId"`
}
