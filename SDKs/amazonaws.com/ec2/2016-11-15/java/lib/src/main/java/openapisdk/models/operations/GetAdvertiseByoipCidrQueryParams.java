package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAdvertiseByoipCidrQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetAdvertiseByoipCidrActionEnum action;
    public GetAdvertiseByoipCidrQueryParams withAction(GetAdvertiseByoipCidrActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Cidr")
    public String cidr;
    public GetAdvertiseByoipCidrQueryParams withCidr(String cidr) {
        this.cidr = cidr;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetAdvertiseByoipCidrQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetAdvertiseByoipCidrVersionEnum version;
    public GetAdvertiseByoipCidrQueryParams withVersion(GetAdvertiseByoipCidrVersionEnum version) {
        this.version = version;
        return this;
    }
}