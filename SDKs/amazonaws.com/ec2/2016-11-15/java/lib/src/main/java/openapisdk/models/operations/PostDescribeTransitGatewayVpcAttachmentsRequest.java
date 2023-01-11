package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeTransitGatewayVpcAttachmentsRequest {
    public PostDescribeTransitGatewayVpcAttachmentsQueryParams queryParams;
    public PostDescribeTransitGatewayVpcAttachmentsRequest withQueryParams(PostDescribeTransitGatewayVpcAttachmentsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeTransitGatewayVpcAttachmentsHeaders headers;
    public PostDescribeTransitGatewayVpcAttachmentsRequest withHeaders(PostDescribeTransitGatewayVpcAttachmentsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeTransitGatewayVpcAttachmentsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}