package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateTransitGatewayPeeringAttachmentRequest {
    public PostCreateTransitGatewayPeeringAttachmentQueryParams queryParams;
    public PostCreateTransitGatewayPeeringAttachmentRequest withQueryParams(PostCreateTransitGatewayPeeringAttachmentQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCreateTransitGatewayPeeringAttachmentHeaders headers;
    public PostCreateTransitGatewayPeeringAttachmentRequest withHeaders(PostCreateTransitGatewayPeeringAttachmentHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCreateTransitGatewayPeeringAttachmentRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}