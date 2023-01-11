package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AssociateResolverEndpointIpAddressRequest {
    public AssociateResolverEndpointIpAddressHeaders headers;
    public AssociateResolverEndpointIpAddressRequest withHeaders(AssociateResolverEndpointIpAddressHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AssociateResolverEndpointIpAddressRequest request;
    public AssociateResolverEndpointIpAddressRequest withRequest(openapisdk.models.shared.AssociateResolverEndpointIpAddressRequest request) {
        this.request = request;
        return this;
    }
}