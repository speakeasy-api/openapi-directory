package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class InitiateVaultLockRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("policy")
    public InitiateVaultLockRequestBodyPolicy policy;
    public InitiateVaultLockRequestBody withPolicy(InitiateVaultLockRequestBodyPolicy policy) {
        this.policy = policy;
        return this;
    }
}