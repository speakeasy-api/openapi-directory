package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDetachClassicLinkVpcQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDetachClassicLinkVpcActionEnum action;
    public GetDetachClassicLinkVpcQueryParams withAction(GetDetachClassicLinkVpcActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetDetachClassicLinkVpcQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=InstanceId")
    public String instanceId;
    public GetDetachClassicLinkVpcQueryParams withInstanceId(String instanceId) {
        this.instanceId = instanceId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDetachClassicLinkVpcVersionEnum version;
    public GetDetachClassicLinkVpcQueryParams withVersion(GetDetachClassicLinkVpcVersionEnum version) {
        this.version = version;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=VpcId")
    public String vpcId;
    public GetDetachClassicLinkVpcQueryParams withVpcId(String vpcId) {
        this.vpcId = vpcId;
        return this;
    }
}