package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAcceptVpcPeeringConnectionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetAcceptVpcPeeringConnectionActionEnum action;
    public GetAcceptVpcPeeringConnectionQueryParams withAction(GetAcceptVpcPeeringConnectionActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetAcceptVpcPeeringConnectionQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetAcceptVpcPeeringConnectionVersionEnum version;
    public GetAcceptVpcPeeringConnectionQueryParams withVersion(GetAcceptVpcPeeringConnectionVersionEnum version) {
        this.version = version;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=VpcPeeringConnectionId")
    public String vpcPeeringConnectionId;
    public GetAcceptVpcPeeringConnectionQueryParams withVpcPeeringConnectionId(String vpcPeeringConnectionId) {
        this.vpcPeeringConnectionId = vpcPeeringConnectionId;
        return this;
    }
}