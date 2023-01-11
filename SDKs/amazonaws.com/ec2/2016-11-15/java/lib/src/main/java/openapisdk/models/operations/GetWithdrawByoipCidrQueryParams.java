package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetWithdrawByoipCidrQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetWithdrawByoipCidrActionEnum action;
    public GetWithdrawByoipCidrQueryParams withAction(GetWithdrawByoipCidrActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Cidr")
    public String cidr;
    public GetWithdrawByoipCidrQueryParams withCidr(String cidr) {
        this.cidr = cidr;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetWithdrawByoipCidrQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetWithdrawByoipCidrVersionEnum version;
    public GetWithdrawByoipCidrQueryParams withVersion(GetWithdrawByoipCidrVersionEnum version) {
        this.version = version;
        return this;
    }
}