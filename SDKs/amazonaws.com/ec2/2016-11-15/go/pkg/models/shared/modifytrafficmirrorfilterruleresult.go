package shared

// ModifyTrafficMirrorFilterRuleResultTrafficMirrorFilterRuleDestinationPortRange
// The destination port range assigned to the Traffic Mirror rule.
type ModifyTrafficMirrorFilterRuleResultTrafficMirrorFilterRuleDestinationPortRange struct {
	FromPort map[string]interface{}
	ToPort   map[string]interface{}
}

// ModifyTrafficMirrorFilterRuleResultTrafficMirrorFilterRuleSourcePortRange
// The source port range assigned to the Traffic Mirror rule.
type ModifyTrafficMirrorFilterRuleResultTrafficMirrorFilterRuleSourcePortRange struct {
	FromPort map[string]interface{}
	ToPort   map[string]interface{}
}

// ModifyTrafficMirrorFilterRuleResultTrafficMirrorFilterRule
// Modifies a Traffic Mirror rule.
type ModifyTrafficMirrorFilterRuleResultTrafficMirrorFilterRule struct {
	Description               map[string]interface{}
	DestinationCidrBlock      map[string]interface{}
	DestinationPortRange      *ModifyTrafficMirrorFilterRuleResultTrafficMirrorFilterRuleDestinationPortRange
	Protocol                  map[string]interface{}
	RuleAction                map[string]interface{}
	RuleNumber                map[string]interface{}
	SourceCidrBlock           map[string]interface{}
	SourcePortRange           *ModifyTrafficMirrorFilterRuleResultTrafficMirrorFilterRuleSourcePortRange
	TrafficDirection          map[string]interface{}
	TrafficMirrorFilterID     map[string]interface{}
	TrafficMirrorFilterRuleID map[string]interface{}
}

type ModifyTrafficMirrorFilterRuleResult struct {
	TrafficMirrorFilterRule *ModifyTrafficMirrorFilterRuleResultTrafficMirrorFilterRule
}
