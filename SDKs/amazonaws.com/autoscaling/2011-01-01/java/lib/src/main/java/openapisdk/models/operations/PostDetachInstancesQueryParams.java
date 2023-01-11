package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDetachInstancesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDetachInstancesActionEnum action;
    public PostDetachInstancesQueryParams withAction(PostDetachInstancesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDetachInstancesVersionEnum version;
    public PostDetachInstancesQueryParams withVersion(PostDetachInstancesVersionEnum version) {
        this.version = version;
        return this;
    }
}