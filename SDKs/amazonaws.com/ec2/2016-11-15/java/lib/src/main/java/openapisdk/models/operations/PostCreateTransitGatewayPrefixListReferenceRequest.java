package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateTransitGatewayPrefixListReferenceRequest {
    public PostCreateTransitGatewayPrefixListReferenceQueryParams queryParams;
    public PostCreateTransitGatewayPrefixListReferenceRequest withQueryParams(PostCreateTransitGatewayPrefixListReferenceQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCreateTransitGatewayPrefixListReferenceHeaders headers;
    public PostCreateTransitGatewayPrefixListReferenceRequest withHeaders(PostCreateTransitGatewayPrefixListReferenceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCreateTransitGatewayPrefixListReferenceRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}