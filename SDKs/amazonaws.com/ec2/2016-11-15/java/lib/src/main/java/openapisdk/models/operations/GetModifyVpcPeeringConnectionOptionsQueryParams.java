package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetModifyVpcPeeringConnectionOptionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=AccepterPeeringConnectionOptions")
    public GetModifyVpcPeeringConnectionOptionsAccepterPeeringConnectionOptions accepterPeeringConnectionOptions;
    public GetModifyVpcPeeringConnectionOptionsQueryParams withAccepterPeeringConnectionOptions(GetModifyVpcPeeringConnectionOptionsAccepterPeeringConnectionOptions accepterPeeringConnectionOptions) {
        this.accepterPeeringConnectionOptions = accepterPeeringConnectionOptions;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetModifyVpcPeeringConnectionOptionsActionEnum action;
    public GetModifyVpcPeeringConnectionOptionsQueryParams withAction(GetModifyVpcPeeringConnectionOptionsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetModifyVpcPeeringConnectionOptionsQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=RequesterPeeringConnectionOptions")
    public GetModifyVpcPeeringConnectionOptionsRequesterPeeringConnectionOptions requesterPeeringConnectionOptions;
    public GetModifyVpcPeeringConnectionOptionsQueryParams withRequesterPeeringConnectionOptions(GetModifyVpcPeeringConnectionOptionsRequesterPeeringConnectionOptions requesterPeeringConnectionOptions) {
        this.requesterPeeringConnectionOptions = requesterPeeringConnectionOptions;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetModifyVpcPeeringConnectionOptionsVersionEnum version;
    public GetModifyVpcPeeringConnectionOptionsQueryParams withVersion(GetModifyVpcPeeringConnectionOptionsVersionEnum version) {
        this.version = version;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=VpcPeeringConnectionId")
    public String vpcPeeringConnectionId;
    public GetModifyVpcPeeringConnectionOptionsQueryParams withVpcPeeringConnectionId(String vpcPeeringConnectionId) {
        this.vpcPeeringConnectionId = vpcPeeringConnectionId;
        return this;
    }
}