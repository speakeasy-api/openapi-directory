package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateDbProxyQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCreateDbProxyActionEnum action;
    public PostCreateDbProxyQueryParams withAction(PostCreateDbProxyActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCreateDbProxyVersionEnum version;
    public PostCreateDbProxyQueryParams withVersion(PostCreateDbProxyVersionEnum version) {
        this.version = version;
        return this;
    }
}