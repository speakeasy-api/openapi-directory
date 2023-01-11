package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeTransitGatewayConnectPeersRequest {
    public PostDescribeTransitGatewayConnectPeersQueryParams queryParams;
    public PostDescribeTransitGatewayConnectPeersRequest withQueryParams(PostDescribeTransitGatewayConnectPeersQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeTransitGatewayConnectPeersHeaders headers;
    public PostDescribeTransitGatewayConnectPeersRequest withHeaders(PostDescribeTransitGatewayConnectPeersHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeTransitGatewayConnectPeersRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}