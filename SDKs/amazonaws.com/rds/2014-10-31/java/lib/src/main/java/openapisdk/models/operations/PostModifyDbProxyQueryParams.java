package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyDbProxyQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostModifyDbProxyActionEnum action;
    public PostModifyDbProxyQueryParams withAction(PostModifyDbProxyActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostModifyDbProxyVersionEnum version;
    public PostModifyDbProxyQueryParams withVersion(PostModifyDbProxyVersionEnum version) {
        this.version = version;
        return this;
    }
}