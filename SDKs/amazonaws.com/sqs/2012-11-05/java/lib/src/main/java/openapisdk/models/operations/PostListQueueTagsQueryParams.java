package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostListQueueTagsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostListQueueTagsActionEnum action;
    public PostListQueueTagsQueryParams withAction(PostListQueueTagsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostListQueueTagsVersionEnum version;
    public PostListQueueTagsQueryParams withVersion(PostListQueueTagsVersionEnum version) {
        this.version = version;
        return this;
    }
}