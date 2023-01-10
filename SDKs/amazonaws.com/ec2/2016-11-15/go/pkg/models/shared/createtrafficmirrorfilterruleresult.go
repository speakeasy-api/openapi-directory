package shared

// CreateTrafficMirrorFilterRuleResultTrafficMirrorFilterRuleDestinationPortRange
// The destination port range assigned to the Traffic Mirror rule.
type CreateTrafficMirrorFilterRuleResultTrafficMirrorFilterRuleDestinationPortRange struct {
	FromPort map[string]interface{}
	ToPort   map[string]interface{}
}

// CreateTrafficMirrorFilterRuleResultTrafficMirrorFilterRuleSourcePortRange
// The source port range assigned to the Traffic Mirror rule.
type CreateTrafficMirrorFilterRuleResultTrafficMirrorFilterRuleSourcePortRange struct {
	FromPort map[string]interface{}
	ToPort   map[string]interface{}
}

// CreateTrafficMirrorFilterRuleResultTrafficMirrorFilterRule
// The Traffic Mirror rule.
type CreateTrafficMirrorFilterRuleResultTrafficMirrorFilterRule struct {
	Description               map[string]interface{}
	DestinationCidrBlock      map[string]interface{}
	DestinationPortRange      *CreateTrafficMirrorFilterRuleResultTrafficMirrorFilterRuleDestinationPortRange
	Protocol                  map[string]interface{}
	RuleAction                map[string]interface{}
	RuleNumber                map[string]interface{}
	SourceCidrBlock           map[string]interface{}
	SourcePortRange           *CreateTrafficMirrorFilterRuleResultTrafficMirrorFilterRuleSourcePortRange
	TrafficDirection          map[string]interface{}
	TrafficMirrorFilterID     map[string]interface{}
	TrafficMirrorFilterRuleID map[string]interface{}
}

type CreateTrafficMirrorFilterRuleResult struct {
	ClientToken             map[string]interface{}
	TrafficMirrorFilterRule *CreateTrafficMirrorFilterRuleResultTrafficMirrorFilterRule
}
