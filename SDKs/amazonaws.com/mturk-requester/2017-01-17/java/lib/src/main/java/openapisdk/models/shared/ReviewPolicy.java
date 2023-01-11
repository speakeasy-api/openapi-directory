package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReviewPolicy
 *  HIT Review Policy data structures represent HIT review policies, which you specify when you create a HIT. 
**/
public class ReviewPolicy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Parameters")
    public PolicyParameter[] parameters;
    public ReviewPolicy withParameters(PolicyParameter[] parameters) {
        this.parameters = parameters;
        return this;
    }
    @JsonProperty("PolicyName")
    public String policyName;
    public ReviewPolicy withPolicyName(String policyName) {
        this.policyName = policyName;
        return this;
    }
}