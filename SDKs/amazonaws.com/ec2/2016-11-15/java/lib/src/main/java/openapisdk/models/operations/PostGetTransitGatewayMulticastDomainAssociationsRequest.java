package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetTransitGatewayMulticastDomainAssociationsRequest {
    public PostGetTransitGatewayMulticastDomainAssociationsQueryParams queryParams;
    public PostGetTransitGatewayMulticastDomainAssociationsRequest withQueryParams(PostGetTransitGatewayMulticastDomainAssociationsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostGetTransitGatewayMulticastDomainAssociationsHeaders headers;
    public PostGetTransitGatewayMulticastDomainAssociationsRequest withHeaders(PostGetTransitGatewayMulticastDomainAssociationsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostGetTransitGatewayMulticastDomainAssociationsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}