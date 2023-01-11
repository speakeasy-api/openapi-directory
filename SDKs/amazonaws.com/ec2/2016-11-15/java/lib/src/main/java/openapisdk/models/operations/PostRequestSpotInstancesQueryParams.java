package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRequestSpotInstancesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostRequestSpotInstancesActionEnum action;
    public PostRequestSpotInstancesQueryParams withAction(PostRequestSpotInstancesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostRequestSpotInstancesVersionEnum version;
    public PostRequestSpotInstancesQueryParams withVersion(PostRequestSpotInstancesVersionEnum version) {
        this.version = version;
        return this;
    }
}