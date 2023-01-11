package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostStopInstancesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostStopInstancesActionEnum action;
    public PostStopInstancesQueryParams withAction(PostStopInstancesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostStopInstancesVersionEnum version;
    public PostStopInstancesQueryParams withVersion(PostStopInstancesVersionEnum version) {
        this.version = version;
        return this;
    }
}