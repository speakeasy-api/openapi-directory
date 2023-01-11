package openapisdk.models.shared;



/**
 * ModifyTrafficMirrorFilterRuleResultTrafficMirrorFilterRule
 * Modifies a Traffic Mirror rule.
**/
public class ModifyTrafficMirrorFilterRuleResultTrafficMirrorFilterRule {
    public java.util.Map<String, Object> description;
    public ModifyTrafficMirrorFilterRuleResultTrafficMirrorFilterRule withDescription(java.util.Map<String, Object> description) {
        this.description = description;
        return this;
    }
    public java.util.Map<String, Object> destinationCidrBlock;
    public ModifyTrafficMirrorFilterRuleResultTrafficMirrorFilterRule withDestinationCidrBlock(java.util.Map<String, Object> destinationCidrBlock) {
        this.destinationCidrBlock = destinationCidrBlock;
        return this;
    }
    public ModifyTrafficMirrorFilterRuleResultTrafficMirrorFilterRuleDestinationPortRange destinationPortRange;
    public ModifyTrafficMirrorFilterRuleResultTrafficMirrorFilterRule withDestinationPortRange(ModifyTrafficMirrorFilterRuleResultTrafficMirrorFilterRuleDestinationPortRange destinationPortRange) {
        this.destinationPortRange = destinationPortRange;
        return this;
    }
    public java.util.Map<String, Object> protocol;
    public ModifyTrafficMirrorFilterRuleResultTrafficMirrorFilterRule withProtocol(java.util.Map<String, Object> protocol) {
        this.protocol = protocol;
        return this;
    }
    public java.util.Map<String, Object> ruleAction;
    public ModifyTrafficMirrorFilterRuleResultTrafficMirrorFilterRule withRuleAction(java.util.Map<String, Object> ruleAction) {
        this.ruleAction = ruleAction;
        return this;
    }
    public java.util.Map<String, Object> ruleNumber;
    public ModifyTrafficMirrorFilterRuleResultTrafficMirrorFilterRule withRuleNumber(java.util.Map<String, Object> ruleNumber) {
        this.ruleNumber = ruleNumber;
        return this;
    }
    public java.util.Map<String, Object> sourceCidrBlock;
    public ModifyTrafficMirrorFilterRuleResultTrafficMirrorFilterRule withSourceCidrBlock(java.util.Map<String, Object> sourceCidrBlock) {
        this.sourceCidrBlock = sourceCidrBlock;
        return this;
    }
    public ModifyTrafficMirrorFilterRuleResultTrafficMirrorFilterRuleSourcePortRange sourcePortRange;
    public ModifyTrafficMirrorFilterRuleResultTrafficMirrorFilterRule withSourcePortRange(ModifyTrafficMirrorFilterRuleResultTrafficMirrorFilterRuleSourcePortRange sourcePortRange) {
        this.sourcePortRange = sourcePortRange;
        return this;
    }
    public java.util.Map<String, Object> trafficDirection;
    public ModifyTrafficMirrorFilterRuleResultTrafficMirrorFilterRule withTrafficDirection(java.util.Map<String, Object> trafficDirection) {
        this.trafficDirection = trafficDirection;
        return this;
    }
    public java.util.Map<String, Object> trafficMirrorFilterId;
    public ModifyTrafficMirrorFilterRuleResultTrafficMirrorFilterRule withTrafficMirrorFilterId(java.util.Map<String, Object> trafficMirrorFilterId) {
        this.trafficMirrorFilterId = trafficMirrorFilterId;
        return this;
    }
    public java.util.Map<String, Object> trafficMirrorFilterRuleId;
    public ModifyTrafficMirrorFilterRuleResultTrafficMirrorFilterRule withTrafficMirrorFilterRuleId(java.util.Map<String, Object> trafficMirrorFilterRuleId) {
        this.trafficMirrorFilterRuleId = trafficMirrorFilterRuleId;
        return this;
    }
}