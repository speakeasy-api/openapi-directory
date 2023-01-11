package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SetDataRetrievalPolicyRequestBodyPolicy
 * Data retrieval policy.
**/
public class SetDataRetrievalPolicyRequestBodyPolicy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Rules")
    public openapisdk.models.shared.DataRetrievalRule[] rules;
    public SetDataRetrievalPolicyRequestBodyPolicy withRules(openapisdk.models.shared.DataRetrievalRule[] rules) {
        this.rules = rules;
        return this;
    }
}