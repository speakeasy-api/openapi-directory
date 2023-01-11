package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateScheduledActionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCreateScheduledActionActionEnum action;
    public PostCreateScheduledActionQueryParams withAction(PostCreateScheduledActionActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCreateScheduledActionVersionEnum version;
    public PostCreateScheduledActionQueryParams withVersion(PostCreateScheduledActionVersionEnum version) {
        this.version = version;
        return this;
    }
}