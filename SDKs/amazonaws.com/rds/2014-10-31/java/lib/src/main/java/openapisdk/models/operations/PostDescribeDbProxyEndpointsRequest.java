package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeDbProxyEndpointsRequest {
    public PostDescribeDbProxyEndpointsQueryParams queryParams;
    public PostDescribeDbProxyEndpointsRequest withQueryParams(PostDescribeDbProxyEndpointsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeDbProxyEndpointsHeaders headers;
    public PostDescribeDbProxyEndpointsRequest withHeaders(PostDescribeDbProxyEndpointsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeDbProxyEndpointsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}