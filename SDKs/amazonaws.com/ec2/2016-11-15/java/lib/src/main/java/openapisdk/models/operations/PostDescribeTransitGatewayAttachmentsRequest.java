package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeTransitGatewayAttachmentsRequest {
    public PostDescribeTransitGatewayAttachmentsQueryParams queryParams;
    public PostDescribeTransitGatewayAttachmentsRequest withQueryParams(PostDescribeTransitGatewayAttachmentsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeTransitGatewayAttachmentsHeaders headers;
    public PostDescribeTransitGatewayAttachmentsRequest withHeaders(PostDescribeTransitGatewayAttachmentsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeTransitGatewayAttachmentsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}