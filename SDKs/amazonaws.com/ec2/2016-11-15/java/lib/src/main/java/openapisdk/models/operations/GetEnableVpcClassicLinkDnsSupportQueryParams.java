package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEnableVpcClassicLinkDnsSupportQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetEnableVpcClassicLinkDnsSupportActionEnum action;
    public GetEnableVpcClassicLinkDnsSupportQueryParams withAction(GetEnableVpcClassicLinkDnsSupportActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetEnableVpcClassicLinkDnsSupportVersionEnum version;
    public GetEnableVpcClassicLinkDnsSupportQueryParams withVersion(GetEnableVpcClassicLinkDnsSupportVersionEnum version) {
        this.version = version;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=VpcId")
    public String vpcId;
    public GetEnableVpcClassicLinkDnsSupportQueryParams withVpcId(String vpcId) {
        this.vpcId = vpcId;
        return this;
    }
}