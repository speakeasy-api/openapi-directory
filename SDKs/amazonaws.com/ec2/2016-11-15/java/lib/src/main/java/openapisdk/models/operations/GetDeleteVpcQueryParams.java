package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeleteVpcQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeleteVpcActionEnum action;
    public GetDeleteVpcQueryParams withAction(GetDeleteVpcActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetDeleteVpcQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeleteVpcVersionEnum version;
    public GetDeleteVpcQueryParams withVersion(GetDeleteVpcVersionEnum version) {
        this.version = version;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=VpcId")
    public String vpcId;
    public GetDeleteVpcQueryParams withVpcId(String vpcId) {
        this.vpcId = vpcId;
        return this;
    }
}