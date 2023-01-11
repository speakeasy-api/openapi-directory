package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutResourcePolicyRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BlockPublicPolicy")
    public Boolean blockPublicPolicy;
    public PutResourcePolicyRequest withBlockPublicPolicy(Boolean blockPublicPolicy) {
        this.blockPublicPolicy = blockPublicPolicy;
        return this;
    }
    @JsonProperty("ResourcePolicy")
    public String resourcePolicy;
    public PutResourcePolicyRequest withResourcePolicy(String resourcePolicy) {
        this.resourcePolicy = resourcePolicy;
        return this;
    }
    @JsonProperty("SecretId")
    public String secretId;
    public PutResourcePolicyRequest withSecretId(String secretId) {
        this.secretId = secretId;
        return this;
    }
}