package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeleteNetworkAclQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeleteNetworkAclActionEnum action;
    public GetDeleteNetworkAclQueryParams withAction(GetDeleteNetworkAclActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetDeleteNetworkAclQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NetworkAclId")
    public String networkAclId;
    public GetDeleteNetworkAclQueryParams withNetworkAclId(String networkAclId) {
        this.networkAclId = networkAclId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeleteNetworkAclVersionEnum version;
    public GetDeleteNetworkAclQueryParams withVersion(GetDeleteNetworkAclVersionEnum version) {
        this.version = version;
        return this;
    }
}