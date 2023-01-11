package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateQueueQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCreateQueueActionEnum action;
    public PostCreateQueueQueryParams withAction(PostCreateQueueActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCreateQueueVersionEnum version;
    public PostCreateQueueQueryParams withVersion(PostCreateQueueVersionEnum version) {
        this.version = version;
        return this;
    }
}