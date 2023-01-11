package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeExpressionsRequest {
    public PostDescribeExpressionsQueryParams queryParams;
    public PostDescribeExpressionsRequest withQueryParams(PostDescribeExpressionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeExpressionsHeaders headers;
    public PostDescribeExpressionsRequest withHeaders(PostDescribeExpressionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeExpressionsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}