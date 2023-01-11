package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUnmonitorInstancesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostUnmonitorInstancesActionEnum action;
    public PostUnmonitorInstancesQueryParams withAction(PostUnmonitorInstancesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostUnmonitorInstancesVersionEnum version;
    public PostUnmonitorInstancesQueryParams withVersion(PostUnmonitorInstancesVersionEnum version) {
        this.version = version;
        return this;
    }
}