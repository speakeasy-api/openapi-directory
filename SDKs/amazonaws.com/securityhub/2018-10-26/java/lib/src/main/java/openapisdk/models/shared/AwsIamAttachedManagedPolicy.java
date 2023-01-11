package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsIamAttachedManagedPolicy
 * A managed policy that is attached to an IAM principal.
**/
public class AwsIamAttachedManagedPolicy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PolicyArn")
    public String policyArn;
    public AwsIamAttachedManagedPolicy withPolicyArn(String policyArn) {
        this.policyArn = policyArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PolicyName")
    public String policyName;
    public AwsIamAttachedManagedPolicy withPolicyName(String policyName) {
        this.policyName = policyName;
        return this;
    }
}