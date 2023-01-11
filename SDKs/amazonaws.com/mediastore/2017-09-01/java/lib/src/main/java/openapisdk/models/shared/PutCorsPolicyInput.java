package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PutCorsPolicyInput {
    @JsonProperty("ContainerName")
    public String containerName;
    public PutCorsPolicyInput withContainerName(String containerName) {
        this.containerName = containerName;
        return this;
    }
    @JsonProperty("CorsPolicy")
    public CorsRule[] corsPolicy;
    public PutCorsPolicyInput withCorsPolicy(CorsRule[] corsPolicy) {
        this.corsPolicy = corsPolicy;
        return this;
    }
}