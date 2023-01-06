package shared

type DisassociateResolverRuleRequest struct {
	ResolverRuleID map[string]interface{} `json:"ResolverRuleId"`
	VPCID          string                 `json:"VPCId"`
}
