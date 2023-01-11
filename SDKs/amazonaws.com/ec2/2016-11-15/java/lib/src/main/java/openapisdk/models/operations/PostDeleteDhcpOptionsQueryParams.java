package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteDhcpOptionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteDhcpOptionsActionEnum action;
    public PostDeleteDhcpOptionsQueryParams withAction(PostDeleteDhcpOptionsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteDhcpOptionsVersionEnum version;
    public PostDeleteDhcpOptionsQueryParams withVersion(PostDeleteDhcpOptionsVersionEnum version) {
        this.version = version;
        return this;
    }
}