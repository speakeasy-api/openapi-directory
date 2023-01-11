package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteResolverEndpointRequest {
    @JsonProperty("ResolverEndpointId")
    public String resolverEndpointId;
    public DeleteResolverEndpointRequest withResolverEndpointId(String resolverEndpointId) {
        this.resolverEndpointId = resolverEndpointId;
        return this;
    }
}