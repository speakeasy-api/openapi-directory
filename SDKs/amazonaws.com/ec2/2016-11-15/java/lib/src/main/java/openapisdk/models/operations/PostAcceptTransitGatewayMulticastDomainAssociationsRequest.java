package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAcceptTransitGatewayMulticastDomainAssociationsRequest {
    public PostAcceptTransitGatewayMulticastDomainAssociationsQueryParams queryParams;
    public PostAcceptTransitGatewayMulticastDomainAssociationsRequest withQueryParams(PostAcceptTransitGatewayMulticastDomainAssociationsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostAcceptTransitGatewayMulticastDomainAssociationsHeaders headers;
    public PostAcceptTransitGatewayMulticastDomainAssociationsRequest withHeaders(PostAcceptTransitGatewayMulticastDomainAssociationsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostAcceptTransitGatewayMulticastDomainAssociationsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}