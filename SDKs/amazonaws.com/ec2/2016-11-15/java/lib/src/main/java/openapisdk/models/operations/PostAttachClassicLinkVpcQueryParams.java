package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAttachClassicLinkVpcQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostAttachClassicLinkVpcActionEnum action;
    public PostAttachClassicLinkVpcQueryParams withAction(PostAttachClassicLinkVpcActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostAttachClassicLinkVpcVersionEnum version;
    public PostAttachClassicLinkVpcQueryParams withVersion(PostAttachClassicLinkVpcVersionEnum version) {
        this.version = version;
        return this;
    }
}