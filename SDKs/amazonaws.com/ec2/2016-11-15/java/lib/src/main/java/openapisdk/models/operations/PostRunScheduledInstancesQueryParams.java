package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRunScheduledInstancesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostRunScheduledInstancesActionEnum action;
    public PostRunScheduledInstancesQueryParams withAction(PostRunScheduledInstancesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostRunScheduledInstancesVersionEnum version;
    public PostRunScheduledInstancesQueryParams withVersion(PostRunScheduledInstancesVersionEnum version) {
        this.version = version;
        return this;
    }
}