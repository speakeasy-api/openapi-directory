package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteQueuedReservedInstancesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteQueuedReservedInstancesActionEnum action;
    public PostDeleteQueuedReservedInstancesQueryParams withAction(PostDeleteQueuedReservedInstancesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteQueuedReservedInstancesVersionEnum version;
    public PostDeleteQueuedReservedInstancesQueryParams withVersion(PostDeleteQueuedReservedInstancesVersionEnum version) {
        this.version = version;
        return this;
    }
}