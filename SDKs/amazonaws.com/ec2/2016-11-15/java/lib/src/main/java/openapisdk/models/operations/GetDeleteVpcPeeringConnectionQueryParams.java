package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeleteVpcPeeringConnectionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeleteVpcPeeringConnectionActionEnum action;
    public GetDeleteVpcPeeringConnectionQueryParams withAction(GetDeleteVpcPeeringConnectionActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetDeleteVpcPeeringConnectionQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeleteVpcPeeringConnectionVersionEnum version;
    public GetDeleteVpcPeeringConnectionQueryParams withVersion(GetDeleteVpcPeeringConnectionVersionEnum version) {
        this.version = version;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=VpcPeeringConnectionId")
    public String vpcPeeringConnectionId;
    public GetDeleteVpcPeeringConnectionQueryParams withVpcPeeringConnectionId(String vpcPeeringConnectionId) {
        this.vpcPeeringConnectionId = vpcPeeringConnectionId;
        return this;
    }
}