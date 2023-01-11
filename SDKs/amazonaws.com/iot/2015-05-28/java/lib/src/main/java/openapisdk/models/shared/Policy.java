package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Policy
 * Describes an IoT policy.
**/
public class Policy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("policyArn")
    public String policyArn;
    public Policy withPolicyArn(String policyArn) {
        this.policyArn = policyArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("policyName")
    public String policyName;
    public Policy withPolicyName(String policyName) {
        this.policyName = policyName;
        return this;
    }
}