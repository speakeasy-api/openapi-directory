package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsIamRolePolicy
 * An inline policy that is embedded in the role.
**/
public class AwsIamRolePolicy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PolicyName")
    public String policyName;
    public AwsIamRolePolicy withPolicyName(String policyName) {
        this.policyName = policyName;
        return this;
    }
}