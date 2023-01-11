package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeCoipPoolsRequest {
    public PostDescribeCoipPoolsQueryParams queryParams;
    public PostDescribeCoipPoolsRequest withQueryParams(PostDescribeCoipPoolsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeCoipPoolsHeaders headers;
    public PostDescribeCoipPoolsRequest withHeaders(PostDescribeCoipPoolsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeCoipPoolsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}