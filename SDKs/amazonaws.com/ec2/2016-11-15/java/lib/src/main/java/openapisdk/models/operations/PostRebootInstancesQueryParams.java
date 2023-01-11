package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRebootInstancesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostRebootInstancesActionEnum action;
    public PostRebootInstancesQueryParams withAction(PostRebootInstancesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostRebootInstancesVersionEnum version;
    public PostRebootInstancesQueryParams withVersion(PostRebootInstancesVersionEnum version) {
        this.version = version;
        return this;
    }
}