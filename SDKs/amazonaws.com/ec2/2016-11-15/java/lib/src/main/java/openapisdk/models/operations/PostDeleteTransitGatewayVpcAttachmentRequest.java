package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteTransitGatewayVpcAttachmentRequest {
    public PostDeleteTransitGatewayVpcAttachmentQueryParams queryParams;
    public PostDeleteTransitGatewayVpcAttachmentRequest withQueryParams(PostDeleteTransitGatewayVpcAttachmentQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteTransitGatewayVpcAttachmentHeaders headers;
    public PostDeleteTransitGatewayVpcAttachmentRequest withHeaders(PostDeleteTransitGatewayVpcAttachmentHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteTransitGatewayVpcAttachmentRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}