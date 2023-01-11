package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeSpotFleetRequestsRequest {
    public PostDescribeSpotFleetRequestsQueryParams queryParams;
    public PostDescribeSpotFleetRequestsRequest withQueryParams(PostDescribeSpotFleetRequestsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeSpotFleetRequestsHeaders headers;
    public PostDescribeSpotFleetRequestsRequest withHeaders(PostDescribeSpotFleetRequestsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeSpotFleetRequestsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}