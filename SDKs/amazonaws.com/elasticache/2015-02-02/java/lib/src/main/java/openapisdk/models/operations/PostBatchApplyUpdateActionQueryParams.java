package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostBatchApplyUpdateActionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostBatchApplyUpdateActionActionEnum action;
    public PostBatchApplyUpdateActionQueryParams withAction(PostBatchApplyUpdateActionActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostBatchApplyUpdateActionVersionEnum version;
    public PostBatchApplyUpdateActionQueryParams withVersion(PostBatchApplyUpdateActionVersionEnum version) {
        this.version = version;
        return this;
    }
}