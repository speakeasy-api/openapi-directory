package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDisableVpcClassicLinkDnsSupportQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDisableVpcClassicLinkDnsSupportActionEnum action;
    public GetDisableVpcClassicLinkDnsSupportQueryParams withAction(GetDisableVpcClassicLinkDnsSupportActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDisableVpcClassicLinkDnsSupportVersionEnum version;
    public GetDisableVpcClassicLinkDnsSupportQueryParams withVersion(GetDisableVpcClassicLinkDnsSupportVersionEnum version) {
        this.version = version;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=VpcId")
    public String vpcId;
    public GetDisableVpcClassicLinkDnsSupportQueryParams withVpcId(String vpcId) {
        this.vpcId = vpcId;
        return this;
    }
}