package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostChangeMessageVisibilityBatchQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostChangeMessageVisibilityBatchActionEnum action;
    public PostChangeMessageVisibilityBatchQueryParams withAction(PostChangeMessageVisibilityBatchActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostChangeMessageVisibilityBatchVersionEnum version;
    public PostChangeMessageVisibilityBatchQueryParams withVersion(PostChangeMessageVisibilityBatchVersionEnum version) {
        this.version = version;
        return this;
    }
}