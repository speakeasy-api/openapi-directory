package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeDbInstancesRequest {
    public PostDescribeDbInstancesQueryParams queryParams;
    public PostDescribeDbInstancesRequest withQueryParams(PostDescribeDbInstancesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeDbInstancesHeaders headers;
    public PostDescribeDbInstancesRequest withHeaders(PostDescribeDbInstancesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeDbInstancesRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}