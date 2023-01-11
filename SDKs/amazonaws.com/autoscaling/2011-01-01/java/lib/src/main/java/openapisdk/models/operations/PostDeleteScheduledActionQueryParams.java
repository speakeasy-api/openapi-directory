package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteScheduledActionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteScheduledActionActionEnum action;
    public PostDeleteScheduledActionQueryParams withAction(PostDeleteScheduledActionActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteScheduledActionVersionEnum version;
    public PostDeleteScheduledActionQueryParams withVersion(PostDeleteScheduledActionVersionEnum version) {
        this.version = version;
        return this;
    }
}