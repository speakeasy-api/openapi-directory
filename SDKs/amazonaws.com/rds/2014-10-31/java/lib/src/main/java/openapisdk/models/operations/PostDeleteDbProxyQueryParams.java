package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteDbProxyQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteDbProxyActionEnum action;
    public PostDeleteDbProxyQueryParams withAction(PostDeleteDbProxyActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteDbProxyVersionEnum version;
    public PostDeleteDbProxyQueryParams withVersion(PostDeleteDbProxyVersionEnum version) {
        this.version = version;
        return this;
    }
}