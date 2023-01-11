package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostBatchStopUpdateActionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostBatchStopUpdateActionActionEnum action;
    public PostBatchStopUpdateActionQueryParams withAction(PostBatchStopUpdateActionActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostBatchStopUpdateActionVersionEnum version;
    public PostBatchStopUpdateActionQueryParams withVersion(PostBatchStopUpdateActionVersionEnum version) {
        this.version = version;
        return this;
    }
}