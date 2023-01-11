package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyTransitGatewayPrefixListReferenceRequest {
    public PostModifyTransitGatewayPrefixListReferenceQueryParams queryParams;
    public PostModifyTransitGatewayPrefixListReferenceRequest withQueryParams(PostModifyTransitGatewayPrefixListReferenceQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostModifyTransitGatewayPrefixListReferenceHeaders headers;
    public PostModifyTransitGatewayPrefixListReferenceRequest withHeaders(PostModifyTransitGatewayPrefixListReferenceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostModifyTransitGatewayPrefixListReferenceRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}