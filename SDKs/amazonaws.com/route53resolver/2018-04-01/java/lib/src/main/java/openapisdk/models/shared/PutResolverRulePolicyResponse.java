package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PutResolverRulePolicyResponse
 * The response to a <code>PutResolverRulePolicy</code> request.
**/
public class PutResolverRulePolicyResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReturnValue")
    public Boolean returnValue;
    public PutResolverRulePolicyResponse withReturnValue(Boolean returnValue) {
        this.returnValue = returnValue;
        return this;
    }
}