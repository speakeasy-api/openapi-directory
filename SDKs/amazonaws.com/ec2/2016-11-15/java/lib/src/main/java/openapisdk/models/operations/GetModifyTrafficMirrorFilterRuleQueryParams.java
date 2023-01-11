package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetModifyTrafficMirrorFilterRuleQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetModifyTrafficMirrorFilterRuleActionEnum action;
    public GetModifyTrafficMirrorFilterRuleQueryParams withAction(GetModifyTrafficMirrorFilterRuleActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Description")
    public String description;
    public GetModifyTrafficMirrorFilterRuleQueryParams withDescription(String description) {
        this.description = description;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DestinationCidrBlock")
    public String destinationCidrBlock;
    public GetModifyTrafficMirrorFilterRuleQueryParams withDestinationCidrBlock(String destinationCidrBlock) {
        this.destinationCidrBlock = destinationCidrBlock;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DestinationPortRange")
    public GetModifyTrafficMirrorFilterRuleDestinationPortRange destinationPortRange;
    public GetModifyTrafficMirrorFilterRuleQueryParams withDestinationPortRange(GetModifyTrafficMirrorFilterRuleDestinationPortRange destinationPortRange) {
        this.destinationPortRange = destinationPortRange;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetModifyTrafficMirrorFilterRuleQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Protocol")
    public Long protocol;
    public GetModifyTrafficMirrorFilterRuleQueryParams withProtocol(Long protocol) {
        this.protocol = protocol;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=RemoveField")
    public openapisdk.models.shared.TrafficMirrorFilterRuleFieldEnum[] removeField;
    public GetModifyTrafficMirrorFilterRuleQueryParams withRemoveField(openapisdk.models.shared.TrafficMirrorFilterRuleFieldEnum[] removeField) {
        this.removeField = removeField;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=RuleAction")
    public GetModifyTrafficMirrorFilterRuleRuleActionEnum ruleAction;
    public GetModifyTrafficMirrorFilterRuleQueryParams withRuleAction(GetModifyTrafficMirrorFilterRuleRuleActionEnum ruleAction) {
        this.ruleAction = ruleAction;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=RuleNumber")
    public Long ruleNumber;
    public GetModifyTrafficMirrorFilterRuleQueryParams withRuleNumber(Long ruleNumber) {
        this.ruleNumber = ruleNumber;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=SourceCidrBlock")
    public String sourceCidrBlock;
    public GetModifyTrafficMirrorFilterRuleQueryParams withSourceCidrBlock(String sourceCidrBlock) {
        this.sourceCidrBlock = sourceCidrBlock;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=SourcePortRange")
    public GetModifyTrafficMirrorFilterRuleSourcePortRange sourcePortRange;
    public GetModifyTrafficMirrorFilterRuleQueryParams withSourcePortRange(GetModifyTrafficMirrorFilterRuleSourcePortRange sourcePortRange) {
        this.sourcePortRange = sourcePortRange;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=TrafficDirection")
    public GetModifyTrafficMirrorFilterRuleTrafficDirectionEnum trafficDirection;
    public GetModifyTrafficMirrorFilterRuleQueryParams withTrafficDirection(GetModifyTrafficMirrorFilterRuleTrafficDirectionEnum trafficDirection) {
        this.trafficDirection = trafficDirection;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=TrafficMirrorFilterRuleId")
    public String trafficMirrorFilterRuleId;
    public GetModifyTrafficMirrorFilterRuleQueryParams withTrafficMirrorFilterRuleId(String trafficMirrorFilterRuleId) {
        this.trafficMirrorFilterRuleId = trafficMirrorFilterRuleId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetModifyTrafficMirrorFilterRuleVersionEnum version;
    public GetModifyTrafficMirrorFilterRuleQueryParams withVersion(GetModifyTrafficMirrorFilterRuleVersionEnum version) {
        this.version = version;
        return this;
    }
}