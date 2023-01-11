package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDisableVpcClassicLinkDnsSupportQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDisableVpcClassicLinkDnsSupportActionEnum action;
    public PostDisableVpcClassicLinkDnsSupportQueryParams withAction(PostDisableVpcClassicLinkDnsSupportActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDisableVpcClassicLinkDnsSupportVersionEnum version;
    public PostDisableVpcClassicLinkDnsSupportQueryParams withVersion(PostDisableVpcClassicLinkDnsSupportVersionEnum version) {
        this.version = version;
        return this;
    }
}