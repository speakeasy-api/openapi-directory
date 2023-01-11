package openapisdk.models.shared;



/**
 * CreateTrafficMirrorFilterRuleResultTrafficMirrorFilterRule
 * The Traffic Mirror rule.
**/
public class CreateTrafficMirrorFilterRuleResultTrafficMirrorFilterRule {
    public java.util.Map<String, Object> description;
    public CreateTrafficMirrorFilterRuleResultTrafficMirrorFilterRule withDescription(java.util.Map<String, Object> description) {
        this.description = description;
        return this;
    }
    public java.util.Map<String, Object> destinationCidrBlock;
    public CreateTrafficMirrorFilterRuleResultTrafficMirrorFilterRule withDestinationCidrBlock(java.util.Map<String, Object> destinationCidrBlock) {
        this.destinationCidrBlock = destinationCidrBlock;
        return this;
    }
    public CreateTrafficMirrorFilterRuleResultTrafficMirrorFilterRuleDestinationPortRange destinationPortRange;
    public CreateTrafficMirrorFilterRuleResultTrafficMirrorFilterRule withDestinationPortRange(CreateTrafficMirrorFilterRuleResultTrafficMirrorFilterRuleDestinationPortRange destinationPortRange) {
        this.destinationPortRange = destinationPortRange;
        return this;
    }
    public java.util.Map<String, Object> protocol;
    public CreateTrafficMirrorFilterRuleResultTrafficMirrorFilterRule withProtocol(java.util.Map<String, Object> protocol) {
        this.protocol = protocol;
        return this;
    }
    public java.util.Map<String, Object> ruleAction;
    public CreateTrafficMirrorFilterRuleResultTrafficMirrorFilterRule withRuleAction(java.util.Map<String, Object> ruleAction) {
        this.ruleAction = ruleAction;
        return this;
    }
    public java.util.Map<String, Object> ruleNumber;
    public CreateTrafficMirrorFilterRuleResultTrafficMirrorFilterRule withRuleNumber(java.util.Map<String, Object> ruleNumber) {
        this.ruleNumber = ruleNumber;
        return this;
    }
    public java.util.Map<String, Object> sourceCidrBlock;
    public CreateTrafficMirrorFilterRuleResultTrafficMirrorFilterRule withSourceCidrBlock(java.util.Map<String, Object> sourceCidrBlock) {
        this.sourceCidrBlock = sourceCidrBlock;
        return this;
    }
    public CreateTrafficMirrorFilterRuleResultTrafficMirrorFilterRuleSourcePortRange sourcePortRange;
    public CreateTrafficMirrorFilterRuleResultTrafficMirrorFilterRule withSourcePortRange(CreateTrafficMirrorFilterRuleResultTrafficMirrorFilterRuleSourcePortRange sourcePortRange) {
        this.sourcePortRange = sourcePortRange;
        return this;
    }
    public java.util.Map<String, Object> trafficDirection;
    public CreateTrafficMirrorFilterRuleResultTrafficMirrorFilterRule withTrafficDirection(java.util.Map<String, Object> trafficDirection) {
        this.trafficDirection = trafficDirection;
        return this;
    }
    public java.util.Map<String, Object> trafficMirrorFilterId;
    public CreateTrafficMirrorFilterRuleResultTrafficMirrorFilterRule withTrafficMirrorFilterId(java.util.Map<String, Object> trafficMirrorFilterId) {
        this.trafficMirrorFilterId = trafficMirrorFilterId;
        return this;
    }
    public java.util.Map<String, Object> trafficMirrorFilterRuleId;
    public CreateTrafficMirrorFilterRuleResultTrafficMirrorFilterRule withTrafficMirrorFilterRuleId(java.util.Map<String, Object> trafficMirrorFilterRuleId) {
        this.trafficMirrorFilterRuleId = trafficMirrorFilterRuleId;
        return this;
    }
}