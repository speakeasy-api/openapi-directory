package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateDhcpOptionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCreateDhcpOptionsActionEnum action;
    public PostCreateDhcpOptionsQueryParams withAction(PostCreateDhcpOptionsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCreateDhcpOptionsVersionEnum version;
    public PostCreateDhcpOptionsQueryParams withVersion(PostCreateDhcpOptionsVersionEnum version) {
        this.version = version;
        return this;
    }
}