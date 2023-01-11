package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SetVaultAccessPolicyRequestBodyPolicy
 * Contains the vault access policy.
**/
public class SetVaultAccessPolicyRequestBodyPolicy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Policy")
    public String policy;
    public SetVaultAccessPolicyRequestBodyPolicy withPolicy(String policy) {
        this.policy = policy;
        return this;
    }
}