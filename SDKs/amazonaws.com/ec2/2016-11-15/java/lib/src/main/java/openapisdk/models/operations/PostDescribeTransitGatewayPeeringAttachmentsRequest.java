package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeTransitGatewayPeeringAttachmentsRequest {
    public PostDescribeTransitGatewayPeeringAttachmentsQueryParams queryParams;
    public PostDescribeTransitGatewayPeeringAttachmentsRequest withQueryParams(PostDescribeTransitGatewayPeeringAttachmentsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeTransitGatewayPeeringAttachmentsHeaders headers;
    public PostDescribeTransitGatewayPeeringAttachmentsRequest withHeaders(PostDescribeTransitGatewayPeeringAttachmentsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeTransitGatewayPeeringAttachmentsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}