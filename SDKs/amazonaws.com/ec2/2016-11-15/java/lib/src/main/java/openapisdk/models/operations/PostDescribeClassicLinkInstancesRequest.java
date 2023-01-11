package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeClassicLinkInstancesRequest {
    public PostDescribeClassicLinkInstancesQueryParams queryParams;
    public PostDescribeClassicLinkInstancesRequest withQueryParams(PostDescribeClassicLinkInstancesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeClassicLinkInstancesHeaders headers;
    public PostDescribeClassicLinkInstancesRequest withHeaders(PostDescribeClassicLinkInstancesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeClassicLinkInstancesRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}