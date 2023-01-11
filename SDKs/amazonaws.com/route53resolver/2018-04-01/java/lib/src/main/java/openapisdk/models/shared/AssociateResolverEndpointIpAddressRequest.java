package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AssociateResolverEndpointIpAddressRequest {
    @JsonProperty("IpAddress")
    public IpAddressUpdate ipAddress;
    public AssociateResolverEndpointIpAddressRequest withIpAddress(IpAddressUpdate ipAddress) {
        this.ipAddress = ipAddress;
        return this;
    }
    @JsonProperty("ResolverEndpointId")
    public String resolverEndpointId;
    public AssociateResolverEndpointIpAddressRequest withResolverEndpointId(String resolverEndpointId) {
        this.resolverEndpointId = resolverEndpointId;
        return this;
    }
}