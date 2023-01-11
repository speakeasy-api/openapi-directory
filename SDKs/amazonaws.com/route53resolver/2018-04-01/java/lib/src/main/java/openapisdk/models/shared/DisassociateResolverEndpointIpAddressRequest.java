package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DisassociateResolverEndpointIpAddressRequest {
    @JsonProperty("IpAddress")
    public IpAddressUpdate ipAddress;
    public DisassociateResolverEndpointIpAddressRequest withIpAddress(IpAddressUpdate ipAddress) {
        this.ipAddress = ipAddress;
        return this;
    }
    @JsonProperty("ResolverEndpointId")
    public String resolverEndpointId;
    public DisassociateResolverEndpointIpAddressRequest withResolverEndpointId(String resolverEndpointId) {
        this.resolverEndpointId = resolverEndpointId;
        return this;
    }
}