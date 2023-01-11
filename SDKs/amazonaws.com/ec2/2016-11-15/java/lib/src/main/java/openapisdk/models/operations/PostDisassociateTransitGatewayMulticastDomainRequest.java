package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDisassociateTransitGatewayMulticastDomainRequest {
    public PostDisassociateTransitGatewayMulticastDomainQueryParams queryParams;
    public PostDisassociateTransitGatewayMulticastDomainRequest withQueryParams(PostDisassociateTransitGatewayMulticastDomainQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDisassociateTransitGatewayMulticastDomainHeaders headers;
    public PostDisassociateTransitGatewayMulticastDomainRequest withHeaders(PostDisassociateTransitGatewayMulticastDomainHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDisassociateTransitGatewayMulticastDomainRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}