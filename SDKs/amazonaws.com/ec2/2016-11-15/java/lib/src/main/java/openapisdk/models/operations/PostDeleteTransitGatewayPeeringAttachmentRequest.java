package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteTransitGatewayPeeringAttachmentRequest {
    public PostDeleteTransitGatewayPeeringAttachmentQueryParams queryParams;
    public PostDeleteTransitGatewayPeeringAttachmentRequest withQueryParams(PostDeleteTransitGatewayPeeringAttachmentQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteTransitGatewayPeeringAttachmentHeaders headers;
    public PostDeleteTransitGatewayPeeringAttachmentRequest withHeaders(PostDeleteTransitGatewayPeeringAttachmentHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteTransitGatewayPeeringAttachmentRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}