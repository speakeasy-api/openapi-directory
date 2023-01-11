package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDecodeAuthorizationMessageQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDecodeAuthorizationMessageActionEnum action;
    public PostDecodeAuthorizationMessageQueryParams withAction(PostDecodeAuthorizationMessageActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDecodeAuthorizationMessageVersionEnum version;
    public PostDecodeAuthorizationMessageQueryParams withVersion(PostDecodeAuthorizationMessageVersionEnum version) {
        this.version = version;
        return this;
    }
}