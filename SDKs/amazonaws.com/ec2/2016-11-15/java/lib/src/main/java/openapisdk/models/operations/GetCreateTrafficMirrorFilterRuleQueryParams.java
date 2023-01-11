package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCreateTrafficMirrorFilterRuleQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetCreateTrafficMirrorFilterRuleActionEnum action;
    public GetCreateTrafficMirrorFilterRuleQueryParams withAction(GetCreateTrafficMirrorFilterRuleActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ClientToken")
    public String clientToken;
    public GetCreateTrafficMirrorFilterRuleQueryParams withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Description")
    public String description;
    public GetCreateTrafficMirrorFilterRuleQueryParams withDescription(String description) {
        this.description = description;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DestinationCidrBlock")
    public String destinationCidrBlock;
    public GetCreateTrafficMirrorFilterRuleQueryParams withDestinationCidrBlock(String destinationCidrBlock) {
        this.destinationCidrBlock = destinationCidrBlock;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DestinationPortRange")
    public GetCreateTrafficMirrorFilterRuleDestinationPortRange destinationPortRange;
    public GetCreateTrafficMirrorFilterRuleQueryParams withDestinationPortRange(GetCreateTrafficMirrorFilterRuleDestinationPortRange destinationPortRange) {
        this.destinationPortRange = destinationPortRange;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetCreateTrafficMirrorFilterRuleQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Protocol")
    public Long protocol;
    public GetCreateTrafficMirrorFilterRuleQueryParams withProtocol(Long protocol) {
        this.protocol = protocol;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=RuleAction")
    public GetCreateTrafficMirrorFilterRuleRuleActionEnum ruleAction;
    public GetCreateTrafficMirrorFilterRuleQueryParams withRuleAction(GetCreateTrafficMirrorFilterRuleRuleActionEnum ruleAction) {
        this.ruleAction = ruleAction;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=RuleNumber")
    public Long ruleNumber;
    public GetCreateTrafficMirrorFilterRuleQueryParams withRuleNumber(Long ruleNumber) {
        this.ruleNumber = ruleNumber;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=SourceCidrBlock")
    public String sourceCidrBlock;
    public GetCreateTrafficMirrorFilterRuleQueryParams withSourceCidrBlock(String sourceCidrBlock) {
        this.sourceCidrBlock = sourceCidrBlock;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=SourcePortRange")
    public GetCreateTrafficMirrorFilterRuleSourcePortRange sourcePortRange;
    public GetCreateTrafficMirrorFilterRuleQueryParams withSourcePortRange(GetCreateTrafficMirrorFilterRuleSourcePortRange sourcePortRange) {
        this.sourcePortRange = sourcePortRange;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=TrafficDirection")
    public GetCreateTrafficMirrorFilterRuleTrafficDirectionEnum trafficDirection;
    public GetCreateTrafficMirrorFilterRuleQueryParams withTrafficDirection(GetCreateTrafficMirrorFilterRuleTrafficDirectionEnum trafficDirection) {
        this.trafficDirection = trafficDirection;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=TrafficMirrorFilterId")
    public String trafficMirrorFilterId;
    public GetCreateTrafficMirrorFilterRuleQueryParams withTrafficMirrorFilterId(String trafficMirrorFilterId) {
        this.trafficMirrorFilterId = trafficMirrorFilterId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetCreateTrafficMirrorFilterRuleVersionEnum version;
    public GetCreateTrafficMirrorFilterRuleQueryParams withVersion(GetCreateTrafficMirrorFilterRuleVersionEnum version) {
        this.version = version;
        return this;
    }
}