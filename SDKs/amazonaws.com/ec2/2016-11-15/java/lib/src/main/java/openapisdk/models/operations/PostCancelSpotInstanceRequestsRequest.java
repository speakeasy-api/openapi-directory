package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCancelSpotInstanceRequestsRequest {
    public PostCancelSpotInstanceRequestsQueryParams queryParams;
    public PostCancelSpotInstanceRequestsRequest withQueryParams(PostCancelSpotInstanceRequestsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCancelSpotInstanceRequestsHeaders headers;
    public PostCancelSpotInstanceRequestsRequest withHeaders(PostCancelSpotInstanceRequestsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCancelSpotInstanceRequestsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}