package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeClusterVersionsRequest {
    public PostDescribeClusterVersionsQueryParams queryParams;
    public PostDescribeClusterVersionsRequest withQueryParams(PostDescribeClusterVersionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeClusterVersionsHeaders headers;
    public PostDescribeClusterVersionsRequest withHeaders(PostDescribeClusterVersionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeClusterVersionsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}