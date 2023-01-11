package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostSendMessageQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostSendMessageActionEnum action;
    public PostSendMessageQueryParams withAction(PostSendMessageActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostSendMessageVersionEnum version;
    public PostSendMessageQueryParams withVersion(PostSendMessageVersionEnum version) {
        this.version = version;
        return this;
    }
}