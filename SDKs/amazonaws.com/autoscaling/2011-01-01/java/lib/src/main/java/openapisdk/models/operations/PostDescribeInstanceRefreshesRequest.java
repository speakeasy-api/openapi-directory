package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeInstanceRefreshesRequest {
    public PostDescribeInstanceRefreshesQueryParams queryParams;
    public PostDescribeInstanceRefreshesRequest withQueryParams(PostDescribeInstanceRefreshesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeInstanceRefreshesHeaders headers;
    public PostDescribeInstanceRefreshesRequest withHeaders(PostDescribeInstanceRefreshesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeInstanceRefreshesRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}