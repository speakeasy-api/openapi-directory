package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VaultAccessPolicy
 * Contains the vault access policy.
**/
public class VaultAccessPolicy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Policy")
    public String policy;
    public VaultAccessPolicy withPolicy(String policy) {
        this.policy = policy;
        return this;
    }
}