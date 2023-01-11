package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetQueueUrlQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostGetQueueUrlActionEnum action;
    public PostGetQueueUrlQueryParams withAction(PostGetQueueUrlActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostGetQueueUrlVersionEnum version;
    public PostGetQueueUrlQueryParams withVersion(PostGetQueueUrlVersionEnum version) {
        this.version = version;
        return this;
    }
}