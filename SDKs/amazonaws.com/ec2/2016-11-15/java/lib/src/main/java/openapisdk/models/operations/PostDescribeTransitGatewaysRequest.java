package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeTransitGatewaysRequest {
    public PostDescribeTransitGatewaysQueryParams queryParams;
    public PostDescribeTransitGatewaysRequest withQueryParams(PostDescribeTransitGatewaysQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeTransitGatewaysHeaders headers;
    public PostDescribeTransitGatewaysRequest withHeaders(PostDescribeTransitGatewaysHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeTransitGatewaysRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}