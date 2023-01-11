package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCancelSpotFleetRequestsRequest {
    public PostCancelSpotFleetRequestsQueryParams queryParams;
    public PostCancelSpotFleetRequestsRequest withQueryParams(PostCancelSpotFleetRequestsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCancelSpotFleetRequestsHeaders headers;
    public PostCancelSpotFleetRequestsRequest withHeaders(PostCancelSpotFleetRequestsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCancelSpotFleetRequestsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}