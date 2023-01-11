package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeDbProxiesRequest {
    public PostDescribeDbProxiesQueryParams queryParams;
    public PostDescribeDbProxiesRequest withQueryParams(PostDescribeDbProxiesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeDbProxiesHeaders headers;
    public PostDescribeDbProxiesRequest withHeaders(PostDescribeDbProxiesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeDbProxiesRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}