package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetResolverEndpointRequest {
    @JsonProperty("ResolverEndpointId")
    public String resolverEndpointId;
    public GetResolverEndpointRequest withResolverEndpointId(String resolverEndpointId) {
        this.resolverEndpointId = resolverEndpointId;
        return this;
    }
}