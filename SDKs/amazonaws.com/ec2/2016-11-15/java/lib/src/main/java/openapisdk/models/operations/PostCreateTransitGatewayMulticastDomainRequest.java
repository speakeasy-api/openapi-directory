package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateTransitGatewayMulticastDomainRequest {
    public PostCreateTransitGatewayMulticastDomainQueryParams queryParams;
    public PostCreateTransitGatewayMulticastDomainRequest withQueryParams(PostCreateTransitGatewayMulticastDomainQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCreateTransitGatewayMulticastDomainHeaders headers;
    public PostCreateTransitGatewayMulticastDomainRequest withHeaders(PostCreateTransitGatewayMulticastDomainHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCreateTransitGatewayMulticastDomainRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}