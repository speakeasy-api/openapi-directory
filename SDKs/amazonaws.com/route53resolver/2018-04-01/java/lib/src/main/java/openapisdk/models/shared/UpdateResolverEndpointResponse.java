package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateResolverEndpointResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResolverEndpoint")
    public ResolverEndpoint resolverEndpoint;
    public UpdateResolverEndpointResponse withResolverEndpoint(ResolverEndpoint resolverEndpoint) {
        this.resolverEndpoint = resolverEndpoint;
        return this;
    }
}