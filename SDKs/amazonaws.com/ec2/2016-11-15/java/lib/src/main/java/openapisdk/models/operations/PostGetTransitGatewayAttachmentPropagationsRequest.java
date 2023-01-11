package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetTransitGatewayAttachmentPropagationsRequest {
    public PostGetTransitGatewayAttachmentPropagationsQueryParams queryParams;
    public PostGetTransitGatewayAttachmentPropagationsRequest withQueryParams(PostGetTransitGatewayAttachmentPropagationsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostGetTransitGatewayAttachmentPropagationsHeaders headers;
    public PostGetTransitGatewayAttachmentPropagationsRequest withHeaders(PostGetTransitGatewayAttachmentPropagationsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostGetTransitGatewayAttachmentPropagationsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}