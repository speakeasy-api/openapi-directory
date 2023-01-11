package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutResourcePolicyResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PolicyHash")
    public String policyHash;
    public PutResourcePolicyResponse withPolicyHash(String policyHash) {
        this.policyHash = policyHash;
        return this;
    }
}