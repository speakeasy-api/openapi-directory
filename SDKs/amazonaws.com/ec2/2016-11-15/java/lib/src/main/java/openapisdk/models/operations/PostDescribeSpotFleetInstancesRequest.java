package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeSpotFleetInstancesRequest {
    public PostDescribeSpotFleetInstancesQueryParams queryParams;
    public PostDescribeSpotFleetInstancesRequest withQueryParams(PostDescribeSpotFleetInstancesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeSpotFleetInstancesHeaders headers;
    public PostDescribeSpotFleetInstancesRequest withHeaders(PostDescribeSpotFleetInstancesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeSpotFleetInstancesRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}