package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SetDataRetrievalPolicyRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Policy")
    public SetDataRetrievalPolicyRequestBodyPolicy policy;
    public SetDataRetrievalPolicyRequestBody withPolicy(SetDataRetrievalPolicyRequestBodyPolicy policy) {
        this.policy = policy;
        return this;
    }
}