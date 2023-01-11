package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeDbProxyTargetsRequest {
    public PostDescribeDbProxyTargetsQueryParams queryParams;
    public PostDescribeDbProxyTargetsRequest withQueryParams(PostDescribeDbProxyTargetsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeDbProxyTargetsHeaders headers;
    public PostDescribeDbProxyTargetsRequest withHeaders(PostDescribeDbProxyTargetsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeDbProxyTargetsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}