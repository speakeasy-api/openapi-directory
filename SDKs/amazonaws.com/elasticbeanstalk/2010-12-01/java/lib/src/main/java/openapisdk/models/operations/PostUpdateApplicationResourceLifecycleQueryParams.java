package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUpdateApplicationResourceLifecycleQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostUpdateApplicationResourceLifecycleActionEnum action;
    public PostUpdateApplicationResourceLifecycleQueryParams withAction(PostUpdateApplicationResourceLifecycleActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostUpdateApplicationResourceLifecycleVersionEnum version;
    public PostUpdateApplicationResourceLifecycleQueryParams withVersion(PostUpdateApplicationResourceLifecycleVersionEnum version) {
        this.version = version;
        return this;
    }
}