package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteQueueQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteQueueActionEnum action;
    public PostDeleteQueueQueryParams withAction(PostDeleteQueueActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteQueueVersionEnum version;
    public PostDeleteQueueQueryParams withVersion(PostDeleteQueueVersionEnum version) {
        this.version = version;
        return this;
    }
}