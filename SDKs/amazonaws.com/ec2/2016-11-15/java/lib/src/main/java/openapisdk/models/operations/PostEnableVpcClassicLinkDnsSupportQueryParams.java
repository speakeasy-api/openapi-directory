package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostEnableVpcClassicLinkDnsSupportQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostEnableVpcClassicLinkDnsSupportActionEnum action;
    public PostEnableVpcClassicLinkDnsSupportQueryParams withAction(PostEnableVpcClassicLinkDnsSupportActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostEnableVpcClassicLinkDnsSupportVersionEnum version;
    public PostEnableVpcClassicLinkDnsSupportQueryParams withVersion(PostEnableVpcClassicLinkDnsSupportVersionEnum version) {
        this.version = version;
        return this;
    }
}