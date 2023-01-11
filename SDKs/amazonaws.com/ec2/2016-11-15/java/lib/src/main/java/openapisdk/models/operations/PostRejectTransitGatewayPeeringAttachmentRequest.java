package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRejectTransitGatewayPeeringAttachmentRequest {
    public PostRejectTransitGatewayPeeringAttachmentQueryParams queryParams;
    public PostRejectTransitGatewayPeeringAttachmentRequest withQueryParams(PostRejectTransitGatewayPeeringAttachmentQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostRejectTransitGatewayPeeringAttachmentHeaders headers;
    public PostRejectTransitGatewayPeeringAttachmentRequest withHeaders(PostRejectTransitGatewayPeeringAttachmentHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostRejectTransitGatewayPeeringAttachmentRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}