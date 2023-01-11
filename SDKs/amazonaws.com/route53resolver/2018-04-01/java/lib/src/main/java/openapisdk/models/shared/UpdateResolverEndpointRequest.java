package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateResolverEndpointRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public UpdateResolverEndpointRequest withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("ResolverEndpointId")
    public String resolverEndpointId;
    public UpdateResolverEndpointRequest withResolverEndpointId(String resolverEndpointId) {
        this.resolverEndpointId = resolverEndpointId;
        return this;
    }
}