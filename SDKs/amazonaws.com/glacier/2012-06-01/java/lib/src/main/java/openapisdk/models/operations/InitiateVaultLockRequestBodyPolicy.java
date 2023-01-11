package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InitiateVaultLockRequestBodyPolicy
 * Contains the vault lock policy.
**/
public class InitiateVaultLockRequestBodyPolicy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Policy")
    public String policy;
    public InitiateVaultLockRequestBodyPolicy withPolicy(String policy) {
        this.policy = policy;
        return this;
    }
}