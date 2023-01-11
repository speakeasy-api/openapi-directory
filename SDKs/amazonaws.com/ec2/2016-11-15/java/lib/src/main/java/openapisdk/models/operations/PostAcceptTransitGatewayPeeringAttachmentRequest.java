package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAcceptTransitGatewayPeeringAttachmentRequest {
    public PostAcceptTransitGatewayPeeringAttachmentQueryParams queryParams;
    public PostAcceptTransitGatewayPeeringAttachmentRequest withQueryParams(PostAcceptTransitGatewayPeeringAttachmentQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostAcceptTransitGatewayPeeringAttachmentHeaders headers;
    public PostAcceptTransitGatewayPeeringAttachmentRequest withHeaders(PostAcceptTransitGatewayPeeringAttachmentHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostAcceptTransitGatewayPeeringAttachmentRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}