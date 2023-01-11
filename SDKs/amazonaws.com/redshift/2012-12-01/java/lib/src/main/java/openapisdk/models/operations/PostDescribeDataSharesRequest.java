package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeDataSharesRequest {
    public PostDescribeDataSharesQueryParams queryParams;
    public PostDescribeDataSharesRequest withQueryParams(PostDescribeDataSharesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeDataSharesHeaders headers;
    public PostDescribeDataSharesRequest withHeaders(PostDescribeDataSharesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeDataSharesRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}