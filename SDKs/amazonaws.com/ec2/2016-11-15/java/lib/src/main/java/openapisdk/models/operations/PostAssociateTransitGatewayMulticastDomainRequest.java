package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAssociateTransitGatewayMulticastDomainRequest {
    public PostAssociateTransitGatewayMulticastDomainQueryParams queryParams;
    public PostAssociateTransitGatewayMulticastDomainRequest withQueryParams(PostAssociateTransitGatewayMulticastDomainQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostAssociateTransitGatewayMulticastDomainHeaders headers;
    public PostAssociateTransitGatewayMulticastDomainRequest withHeaders(PostAssociateTransitGatewayMulticastDomainHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostAssociateTransitGatewayMulticastDomainRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}