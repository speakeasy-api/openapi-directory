package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCompleteLifecycleActionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCompleteLifecycleActionActionEnum action;
    public PostCompleteLifecycleActionQueryParams withAction(PostCompleteLifecycleActionActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCompleteLifecycleActionVersionEnum version;
    public PostCompleteLifecycleActionQueryParams withVersion(PostCompleteLifecycleActionVersionEnum version) {
        this.version = version;
        return this;
    }
}