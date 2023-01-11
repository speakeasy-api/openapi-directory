package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteTransitGatewayMulticastDomainRequest {
    public PostDeleteTransitGatewayMulticastDomainQueryParams queryParams;
    public PostDeleteTransitGatewayMulticastDomainRequest withQueryParams(PostDeleteTransitGatewayMulticastDomainQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteTransitGatewayMulticastDomainHeaders headers;
    public PostDeleteTransitGatewayMulticastDomainRequest withHeaders(PostDeleteTransitGatewayMulticastDomainHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteTransitGatewayMulticastDomainRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}