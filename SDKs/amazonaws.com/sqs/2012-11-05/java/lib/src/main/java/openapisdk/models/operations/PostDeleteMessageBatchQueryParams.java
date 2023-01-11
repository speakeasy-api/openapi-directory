package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteMessageBatchQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteMessageBatchActionEnum action;
    public PostDeleteMessageBatchQueryParams withAction(PostDeleteMessageBatchActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteMessageBatchVersionEnum version;
    public PostDeleteMessageBatchQueryParams withVersion(PostDeleteMessageBatchVersionEnum version) {
        this.version = version;
        return this;
    }
}