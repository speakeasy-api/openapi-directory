package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUntagQueueQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostUntagQueueActionEnum action;
    public PostUntagQueueQueryParams withAction(PostUntagQueueActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostUntagQueueVersionEnum version;
    public PostUntagQueueQueryParams withVersion(PostUntagQueueVersionEnum version) {
        this.version = version;
        return this;
    }
}