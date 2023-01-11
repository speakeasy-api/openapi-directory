package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateResolverResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resolver")
    public Resolver resolver;
    public UpdateResolverResponse withResolver(Resolver resolver) {
        this.resolver = resolver;
        return this;
    }
}