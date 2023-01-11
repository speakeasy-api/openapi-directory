package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostTagQueueQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostTagQueueActionEnum action;
    public PostTagQueueQueryParams withAction(PostTagQueueActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostTagQueueVersionEnum version;
    public PostTagQueueQueryParams withVersion(PostTagQueueVersionEnum version) {
        this.version = version;
        return this;
    }
}