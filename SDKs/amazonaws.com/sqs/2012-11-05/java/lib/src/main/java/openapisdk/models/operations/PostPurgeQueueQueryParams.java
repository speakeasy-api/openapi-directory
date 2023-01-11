package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostPurgeQueueQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostPurgeQueueActionEnum action;
    public PostPurgeQueueQueryParams withAction(PostPurgeQueueActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostPurgeQueueVersionEnum version;
    public PostPurgeQueueQueryParams withVersion(PostPurgeQueueVersionEnum version) {
        this.version = version;
        return this;
    }
}