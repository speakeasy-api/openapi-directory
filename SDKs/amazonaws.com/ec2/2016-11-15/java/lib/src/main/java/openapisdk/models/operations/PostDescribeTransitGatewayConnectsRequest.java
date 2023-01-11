package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeTransitGatewayConnectsRequest {
    public PostDescribeTransitGatewayConnectsQueryParams queryParams;
    public PostDescribeTransitGatewayConnectsRequest withQueryParams(PostDescribeTransitGatewayConnectsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeTransitGatewayConnectsHeaders headers;
    public PostDescribeTransitGatewayConnectsRequest withHeaders(PostDescribeTransitGatewayConnectsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeTransitGatewayConnectsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}