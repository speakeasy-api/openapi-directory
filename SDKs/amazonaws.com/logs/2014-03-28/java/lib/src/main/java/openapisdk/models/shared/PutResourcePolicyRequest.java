package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutResourcePolicyRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("policyDocument")
    public String policyDocument;
    public PutResourcePolicyRequest withPolicyDocument(String policyDocument) {
        this.policyDocument = policyDocument;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("policyName")
    public String policyName;
    public PutResourcePolicyRequest withPolicyName(String policyName) {
        this.policyName = policyName;
        return this;
    }
}