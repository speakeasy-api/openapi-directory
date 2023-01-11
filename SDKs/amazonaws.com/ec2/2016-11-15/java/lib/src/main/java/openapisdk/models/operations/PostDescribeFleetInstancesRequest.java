package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeFleetInstancesRequest {
    public PostDescribeFleetInstancesQueryParams queryParams;
    public PostDescribeFleetInstancesRequest withQueryParams(PostDescribeFleetInstancesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeFleetInstancesHeaders headers;
    public PostDescribeFleetInstancesRequest withHeaders(PostDescribeFleetInstancesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeFleetInstancesRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}