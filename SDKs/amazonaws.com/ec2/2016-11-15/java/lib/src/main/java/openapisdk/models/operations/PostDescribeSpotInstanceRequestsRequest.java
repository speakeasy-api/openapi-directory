package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeSpotInstanceRequestsRequest {
    public PostDescribeSpotInstanceRequestsQueryParams queryParams;
    public PostDescribeSpotInstanceRequestsRequest withQueryParams(PostDescribeSpotInstanceRequestsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeSpotInstanceRequestsHeaders headers;
    public PostDescribeSpotInstanceRequestsRequest withHeaders(PostDescribeSpotInstanceRequestsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeSpotInstanceRequestsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}