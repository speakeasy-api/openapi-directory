package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeDbEngineVersionsRequest {
    public PostDescribeDbEngineVersionsQueryParams queryParams;
    public PostDescribeDbEngineVersionsRequest withQueryParams(PostDescribeDbEngineVersionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeDbEngineVersionsHeaders headers;
    public PostDescribeDbEngineVersionsRequest withHeaders(PostDescribeDbEngineVersionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeDbEngineVersionsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}