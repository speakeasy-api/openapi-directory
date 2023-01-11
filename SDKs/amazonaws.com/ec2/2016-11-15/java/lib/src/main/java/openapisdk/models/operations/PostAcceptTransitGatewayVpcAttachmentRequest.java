package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAcceptTransitGatewayVpcAttachmentRequest {
    public PostAcceptTransitGatewayVpcAttachmentQueryParams queryParams;
    public PostAcceptTransitGatewayVpcAttachmentRequest withQueryParams(PostAcceptTransitGatewayVpcAttachmentQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostAcceptTransitGatewayVpcAttachmentHeaders headers;
    public PostAcceptTransitGatewayVpcAttachmentRequest withHeaders(PostAcceptTransitGatewayVpcAttachmentHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostAcceptTransitGatewayVpcAttachmentRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}