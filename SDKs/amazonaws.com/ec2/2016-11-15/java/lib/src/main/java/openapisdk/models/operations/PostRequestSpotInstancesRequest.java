package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRequestSpotInstancesRequest {
    public PostRequestSpotInstancesQueryParams queryParams;
    public PostRequestSpotInstancesRequest withQueryParams(PostRequestSpotInstancesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostRequestSpotInstancesHeaders headers;
    public PostRequestSpotInstancesRequest withHeaders(PostRequestSpotInstancesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostRequestSpotInstancesRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}