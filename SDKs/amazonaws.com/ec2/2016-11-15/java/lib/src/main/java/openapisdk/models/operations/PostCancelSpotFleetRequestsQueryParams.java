package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCancelSpotFleetRequestsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCancelSpotFleetRequestsActionEnum action;
    public PostCancelSpotFleetRequestsQueryParams withAction(PostCancelSpotFleetRequestsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCancelSpotFleetRequestsVersionEnum version;
    public PostCancelSpotFleetRequestsQueryParams withVersion(PostCancelSpotFleetRequestsVersionEnum version) {
        this.version = version;
        return this;
    }
}