package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyTransitGatewayVpcAttachmentRequest {
    public PostModifyTransitGatewayVpcAttachmentQueryParams queryParams;
    public PostModifyTransitGatewayVpcAttachmentRequest withQueryParams(PostModifyTransitGatewayVpcAttachmentQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostModifyTransitGatewayVpcAttachmentHeaders headers;
    public PostModifyTransitGatewayVpcAttachmentRequest withHeaders(PostModifyTransitGatewayVpcAttachmentHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostModifyTransitGatewayVpcAttachmentRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}