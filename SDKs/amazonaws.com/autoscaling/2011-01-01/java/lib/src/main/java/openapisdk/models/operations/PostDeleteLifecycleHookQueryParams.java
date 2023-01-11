package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteLifecycleHookQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteLifecycleHookActionEnum action;
    public PostDeleteLifecycleHookQueryParams withAction(PostDeleteLifecycleHookActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteLifecycleHookVersionEnum version;
    public PostDeleteLifecycleHookQueryParams withVersion(PostDeleteLifecycleHookVersionEnum version) {
        this.version = version;
        return this;
    }
}