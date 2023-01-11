package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisassociateResolverEndpointIpAddressRequest {
    public DisassociateResolverEndpointIpAddressHeaders headers;
    public DisassociateResolverEndpointIpAddressRequest withHeaders(DisassociateResolverEndpointIpAddressHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DisassociateResolverEndpointIpAddressRequest request;
    public DisassociateResolverEndpointIpAddressRequest withRequest(openapisdk.models.shared.DisassociateResolverEndpointIpAddressRequest request) {
        this.request = request;
        return this;
    }
}