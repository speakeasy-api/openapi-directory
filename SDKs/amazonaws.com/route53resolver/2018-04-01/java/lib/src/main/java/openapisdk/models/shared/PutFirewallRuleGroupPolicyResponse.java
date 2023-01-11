package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutFirewallRuleGroupPolicyResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReturnValue")
    public Boolean returnValue;
    public PutFirewallRuleGroupPolicyResponse withReturnValue(Boolean returnValue) {
        this.returnValue = returnValue;
        return this;
    }
}