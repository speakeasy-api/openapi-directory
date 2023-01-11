package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDisableVpcClassicLinkQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDisableVpcClassicLinkActionEnum action;
    public GetDisableVpcClassicLinkQueryParams withAction(GetDisableVpcClassicLinkActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetDisableVpcClassicLinkQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDisableVpcClassicLinkVersionEnum version;
    public GetDisableVpcClassicLinkQueryParams withVersion(GetDisableVpcClassicLinkVersionEnum version) {
        this.version = version;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=VpcId")
    public String vpcId;
    public GetDisableVpcClassicLinkQueryParams withVpcId(String vpcId) {
        this.vpcId = vpcId;
        return this;
    }
}