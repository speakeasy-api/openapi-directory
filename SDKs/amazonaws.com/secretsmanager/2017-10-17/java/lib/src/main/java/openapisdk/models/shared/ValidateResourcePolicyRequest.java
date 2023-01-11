package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ValidateResourcePolicyRequest {
    @JsonProperty("ResourcePolicy")
    public String resourcePolicy;
    public ValidateResourcePolicyRequest withResourcePolicy(String resourcePolicy) {
        this.resourcePolicy = resourcePolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SecretId")
    public String secretId;
    public ValidateResourcePolicyRequest withSecretId(String secretId) {
        this.secretId = secretId;
        return this;
    }
}