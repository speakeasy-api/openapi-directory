package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRejectTransitGatewayMulticastDomainAssociationsRequest {
    public PostRejectTransitGatewayMulticastDomainAssociationsQueryParams queryParams;
    public PostRejectTransitGatewayMulticastDomainAssociationsRequest withQueryParams(PostRejectTransitGatewayMulticastDomainAssociationsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostRejectTransitGatewayMulticastDomainAssociationsHeaders headers;
    public PostRejectTransitGatewayMulticastDomainAssociationsRequest withHeaders(PostRejectTransitGatewayMulticastDomainAssociationsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostRejectTransitGatewayMulticastDomainAssociationsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}