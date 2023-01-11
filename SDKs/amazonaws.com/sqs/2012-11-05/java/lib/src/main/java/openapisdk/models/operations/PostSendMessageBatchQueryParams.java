package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostSendMessageBatchQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostSendMessageBatchActionEnum action;
    public PostSendMessageBatchQueryParams withAction(PostSendMessageBatchActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostSendMessageBatchVersionEnum version;
    public PostSendMessageBatchQueryParams withVersion(PostSendMessageBatchVersionEnum version) {
        this.version = version;
        return this;
    }
}