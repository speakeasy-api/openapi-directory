package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsIamGroupPolicy
 * A managed policy that is attached to the IAM group.
**/
public class AwsIamGroupPolicy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PolicyName")
    public String policyName;
    public AwsIamGroupPolicy withPolicyName(String policyName) {
        this.policyName = policyName;
        return this;
    }
}