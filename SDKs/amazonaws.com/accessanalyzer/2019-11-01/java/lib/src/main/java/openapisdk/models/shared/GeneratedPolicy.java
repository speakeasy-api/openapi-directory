package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GeneratedPolicy
 * Contains the text for the generated policy.
**/
public class GeneratedPolicy {
    @JsonProperty("policy")
    public String policy;
    public GeneratedPolicy withPolicy(String policy) {
        this.policy = policy;
        return this;
    }
}