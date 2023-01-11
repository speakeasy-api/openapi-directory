package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCancelSpotInstanceRequestsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCancelSpotInstanceRequestsActionEnum action;
    public PostCancelSpotInstanceRequestsQueryParams withAction(PostCancelSpotInstanceRequestsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCancelSpotInstanceRequestsVersionEnum version;
    public PostCancelSpotInstanceRequestsQueryParams withVersion(PostCancelSpotInstanceRequestsVersionEnum version) {
        this.version = version;
        return this;
    }
}