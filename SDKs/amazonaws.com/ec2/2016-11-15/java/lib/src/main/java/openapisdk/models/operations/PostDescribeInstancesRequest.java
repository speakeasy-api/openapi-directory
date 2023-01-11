package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeInstancesRequest {
    public PostDescribeInstancesQueryParams queryParams;
    public PostDescribeInstancesRequest withQueryParams(PostDescribeInstancesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeInstancesHeaders headers;
    public PostDescribeInstancesRequest withHeaders(PostDescribeInstancesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeInstancesRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}