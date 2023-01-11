package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetTransitGatewayPrefixListReferencesRequest {
    public PostGetTransitGatewayPrefixListReferencesQueryParams queryParams;
    public PostGetTransitGatewayPrefixListReferencesRequest withQueryParams(PostGetTransitGatewayPrefixListReferencesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostGetTransitGatewayPrefixListReferencesHeaders headers;
    public PostGetTransitGatewayPrefixListReferencesRequest withHeaders(PostGetTransitGatewayPrefixListReferencesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostGetTransitGatewayPrefixListReferencesRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}