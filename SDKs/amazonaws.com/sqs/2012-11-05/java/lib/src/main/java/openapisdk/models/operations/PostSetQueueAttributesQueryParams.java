package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostSetQueueAttributesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostSetQueueAttributesActionEnum action;
    public PostSetQueueAttributesQueryParams withAction(PostSetQueueAttributesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostSetQueueAttributesVersionEnum version;
    public PostSetQueueAttributesQueryParams withVersion(PostSetQueueAttributesVersionEnum version) {
        this.version = version;
        return this;
    }
}