package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeHostsRequest {
    public PostDescribeHostsQueryParams queryParams;
    public PostDescribeHostsRequest withQueryParams(PostDescribeHostsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeHostsHeaders headers;
    public PostDescribeHostsRequest withHeaders(PostDescribeHostsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeHostsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}