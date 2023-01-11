package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEnableVpcClassicLinkQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetEnableVpcClassicLinkActionEnum action;
    public GetEnableVpcClassicLinkQueryParams withAction(GetEnableVpcClassicLinkActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetEnableVpcClassicLinkQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetEnableVpcClassicLinkVersionEnum version;
    public GetEnableVpcClassicLinkQueryParams withVersion(GetEnableVpcClassicLinkVersionEnum version) {
        this.version = version;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=VpcId")
    public String vpcId;
    public GetEnableVpcClassicLinkQueryParams withVpcId(String vpcId) {
        this.vpcId = vpcId;
        return this;
    }
}