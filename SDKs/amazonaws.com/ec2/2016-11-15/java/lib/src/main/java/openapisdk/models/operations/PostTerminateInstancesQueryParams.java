package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostTerminateInstancesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostTerminateInstancesActionEnum action;
    public PostTerminateInstancesQueryParams withAction(PostTerminateInstancesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostTerminateInstancesVersionEnum version;
    public PostTerminateInstancesQueryParams withVersion(PostTerminateInstancesVersionEnum version) {
        this.version = version;
        return this;
    }
}