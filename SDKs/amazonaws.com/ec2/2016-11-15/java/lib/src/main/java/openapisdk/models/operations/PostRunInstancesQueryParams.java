package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRunInstancesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostRunInstancesActionEnum action;
    public PostRunInstancesQueryParams withAction(PostRunInstancesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostRunInstancesVersionEnum version;
    public PostRunInstancesQueryParams withVersion(PostRunInstancesVersionEnum version) {
        this.version = version;
        return this;
    }
}