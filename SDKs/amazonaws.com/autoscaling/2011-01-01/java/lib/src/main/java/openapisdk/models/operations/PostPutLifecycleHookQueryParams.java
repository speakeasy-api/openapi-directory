package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostPutLifecycleHookQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostPutLifecycleHookActionEnum action;
    public PostPutLifecycleHookQueryParams withAction(PostPutLifecycleHookActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostPutLifecycleHookVersionEnum version;
    public PostPutLifecycleHookQueryParams withVersion(PostPutLifecycleHookVersionEnum version) {
        this.version = version;
        return this;
    }
}