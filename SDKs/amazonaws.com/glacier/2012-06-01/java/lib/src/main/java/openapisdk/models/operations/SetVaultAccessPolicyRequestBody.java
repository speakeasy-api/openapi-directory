package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SetVaultAccessPolicyRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("policy")
    public SetVaultAccessPolicyRequestBodyPolicy policy;
    public SetVaultAccessPolicyRequestBody withPolicy(SetVaultAccessPolicyRequestBodyPolicy policy) {
        this.policy = policy;
        return this;
    }
}