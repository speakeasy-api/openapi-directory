package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeInstancesHealthRequest {
    public PostDescribeInstancesHealthQueryParams queryParams;
    public PostDescribeInstancesHealthRequest withQueryParams(PostDescribeInstancesHealthQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeInstancesHealthHeaders headers;
    public PostDescribeInstancesHealthRequest withHeaders(PostDescribeInstancesHealthHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeInstancesHealthRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}