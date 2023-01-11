package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRejectTransitGatewayVpcAttachmentRequest {
    public PostRejectTransitGatewayVpcAttachmentQueryParams queryParams;
    public PostRejectTransitGatewayVpcAttachmentRequest withQueryParams(PostRejectTransitGatewayVpcAttachmentQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostRejectTransitGatewayVpcAttachmentHeaders headers;
    public PostRejectTransitGatewayVpcAttachmentRequest withHeaders(PostRejectTransitGatewayVpcAttachmentHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostRejectTransitGatewayVpcAttachmentRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}