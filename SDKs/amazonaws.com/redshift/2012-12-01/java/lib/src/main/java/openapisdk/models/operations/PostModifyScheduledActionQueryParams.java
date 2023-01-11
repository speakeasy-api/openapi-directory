package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyScheduledActionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostModifyScheduledActionActionEnum action;
    public PostModifyScheduledActionQueryParams withAction(PostModifyScheduledActionActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostModifyScheduledActionVersionEnum version;
    public PostModifyScheduledActionQueryParams withVersion(PostModifyScheduledActionVersionEnum version) {
        this.version = version;
        return this;
    }
}