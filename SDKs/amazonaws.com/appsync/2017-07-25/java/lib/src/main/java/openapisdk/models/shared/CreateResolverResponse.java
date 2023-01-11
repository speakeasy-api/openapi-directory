package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateResolverResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resolver")
    public Resolver resolver;
    public CreateResolverResponse withResolver(Resolver resolver) {
        this.resolver = resolver;
        return this;
    }
}