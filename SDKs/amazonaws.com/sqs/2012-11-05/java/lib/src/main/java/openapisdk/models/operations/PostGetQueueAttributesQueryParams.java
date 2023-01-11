package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetQueueAttributesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostGetQueueAttributesActionEnum action;
    public PostGetQueueAttributesQueryParams withAction(PostGetQueueAttributesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostGetQueueAttributesVersionEnum version;
    public PostGetQueueAttributesQueryParams withVersion(PostGetQueueAttributesVersionEnum version) {
        this.version = version;
        return this;
    }
}