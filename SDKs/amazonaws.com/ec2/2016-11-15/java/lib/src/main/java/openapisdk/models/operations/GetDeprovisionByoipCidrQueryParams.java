package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeprovisionByoipCidrQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeprovisionByoipCidrActionEnum action;
    public GetDeprovisionByoipCidrQueryParams withAction(GetDeprovisionByoipCidrActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Cidr")
    public String cidr;
    public GetDeprovisionByoipCidrQueryParams withCidr(String cidr) {
        this.cidr = cidr;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetDeprovisionByoipCidrQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeprovisionByoipCidrVersionEnum version;
    public GetDeprovisionByoipCidrQueryParams withVersion(GetDeprovisionByoipCidrVersionEnum version) {
        this.version = version;
        return this;
    }
}