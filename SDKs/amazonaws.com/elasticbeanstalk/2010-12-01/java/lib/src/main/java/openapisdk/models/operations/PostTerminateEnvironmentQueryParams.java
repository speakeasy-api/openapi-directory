package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostTerminateEnvironmentQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostTerminateEnvironmentActionEnum action;
    public PostTerminateEnvironmentQueryParams withAction(PostTerminateEnvironmentActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostTerminateEnvironmentVersionEnum version;
    public PostTerminateEnvironmentQueryParams withVersion(PostTerminateEnvironmentVersionEnum version) {
        this.version = version;
        return this;
    }
}