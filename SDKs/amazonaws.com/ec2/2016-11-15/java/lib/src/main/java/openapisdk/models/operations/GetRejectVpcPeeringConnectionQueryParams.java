package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRejectVpcPeeringConnectionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetRejectVpcPeeringConnectionActionEnum action;
    public GetRejectVpcPeeringConnectionQueryParams withAction(GetRejectVpcPeeringConnectionActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetRejectVpcPeeringConnectionQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetRejectVpcPeeringConnectionVersionEnum version;
    public GetRejectVpcPeeringConnectionQueryParams withVersion(GetRejectVpcPeeringConnectionVersionEnum version) {
        this.version = version;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=VpcPeeringConnectionId")
    public String vpcPeeringConnectionId;
    public GetRejectVpcPeeringConnectionQueryParams withVpcPeeringConnectionId(String vpcPeeringConnectionId) {
        this.vpcPeeringConnectionId = vpcPeeringConnectionId;
        return this;
    }
}