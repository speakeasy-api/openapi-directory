package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostBatchDeleteScheduledActionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostBatchDeleteScheduledActionActionEnum action;
    public PostBatchDeleteScheduledActionQueryParams withAction(PostBatchDeleteScheduledActionActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostBatchDeleteScheduledActionVersionEnum version;
    public PostBatchDeleteScheduledActionQueryParams withVersion(PostBatchDeleteScheduledActionVersionEnum version) {
        this.version = version;
        return this;
    }
}