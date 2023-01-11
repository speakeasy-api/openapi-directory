package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDetachClassicLinkVpcQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDetachClassicLinkVpcActionEnum action;
    public PostDetachClassicLinkVpcQueryParams withAction(PostDetachClassicLinkVpcActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDetachClassicLinkVpcVersionEnum version;
    public PostDetachClassicLinkVpcQueryParams withVersion(PostDetachClassicLinkVpcVersionEnum version) {
        this.version = version;
        return this;
    }
}