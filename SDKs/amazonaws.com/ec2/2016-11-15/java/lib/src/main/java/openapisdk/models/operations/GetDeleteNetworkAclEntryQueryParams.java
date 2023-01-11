package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeleteNetworkAclEntryQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeleteNetworkAclEntryActionEnum action;
    public GetDeleteNetworkAclEntryQueryParams withAction(GetDeleteNetworkAclEntryActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetDeleteNetworkAclEntryQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Egress")
    public Boolean egress;
    public GetDeleteNetworkAclEntryQueryParams withEgress(Boolean egress) {
        this.egress = egress;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NetworkAclId")
    public String networkAclId;
    public GetDeleteNetworkAclEntryQueryParams withNetworkAclId(String networkAclId) {
        this.networkAclId = networkAclId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=RuleNumber")
    public Long ruleNumber;
    public GetDeleteNetworkAclEntryQueryParams withRuleNumber(Long ruleNumber) {
        this.ruleNumber = ruleNumber;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeleteNetworkAclEntryVersionEnum version;
    public GetDeleteNetworkAclEntryQueryParams withVersion(GetDeleteNetworkAclEntryVersionEnum version) {
        this.version = version;
        return this;
    }
}