package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EffectivePolicy
 * The policy that has the effect on the authorization results.
**/
public class EffectivePolicy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("policyArn")
    public String policyArn;
    public EffectivePolicy withPolicyArn(String policyArn) {
        this.policyArn = policyArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("policyDocument")
    public String policyDocument;
    public EffectivePolicy withPolicyDocument(String policyDocument) {
        this.policyDocument = policyDocument;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("policyName")
    public String policyName;
    public EffectivePolicy withPolicyName(String policyName) {
        this.policyName = policyName;
        return this;
    }
}