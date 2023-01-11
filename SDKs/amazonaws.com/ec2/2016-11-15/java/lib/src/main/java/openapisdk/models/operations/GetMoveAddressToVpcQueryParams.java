package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetMoveAddressToVpcQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetMoveAddressToVpcActionEnum action;
    public GetMoveAddressToVpcQueryParams withAction(GetMoveAddressToVpcActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetMoveAddressToVpcQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PublicIp")
    public String publicIp;
    public GetMoveAddressToVpcQueryParams withPublicIp(String publicIp) {
        this.publicIp = publicIp;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetMoveAddressToVpcVersionEnum version;
    public GetMoveAddressToVpcQueryParams withVersion(GetMoveAddressToVpcVersionEnum version) {
        this.version = version;
        return this;
    }
}