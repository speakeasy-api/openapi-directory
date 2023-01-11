package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostSendBounceQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostSendBounceActionEnum action;
    public PostSendBounceQueryParams withAction(PostSendBounceActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostSendBounceVersionEnum version;
    public PostSendBounceQueryParams withVersion(PostSendBounceVersionEnum version) {
        this.version = version;
        return this;
    }
}