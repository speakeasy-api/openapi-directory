package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateTransitGatewayVpcAttachmentRequest {
    public PostCreateTransitGatewayVpcAttachmentQueryParams queryParams;
    public PostCreateTransitGatewayVpcAttachmentRequest withQueryParams(PostCreateTransitGatewayVpcAttachmentQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCreateTransitGatewayVpcAttachmentHeaders headers;
    public PostCreateTransitGatewayVpcAttachmentRequest withHeaders(PostCreateTransitGatewayVpcAttachmentHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCreateTransitGatewayVpcAttachmentRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}