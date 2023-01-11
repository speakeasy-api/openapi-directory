package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetCorsPolicyOutput {
    @JsonProperty("CorsPolicy")
    public CorsRule[] corsPolicy;
    public GetCorsPolicyOutput withCorsPolicy(CorsRule[] corsPolicy) {
        this.corsPolicy = corsPolicy;
        return this;
    }
}