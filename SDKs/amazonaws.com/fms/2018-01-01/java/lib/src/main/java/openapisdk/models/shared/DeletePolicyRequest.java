package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeletePolicyRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DeleteAllPolicyResources")
    public Boolean deleteAllPolicyResources;
    public DeletePolicyRequest withDeleteAllPolicyResources(Boolean deleteAllPolicyResources) {
        this.deleteAllPolicyResources = deleteAllPolicyResources;
        return this;
    }
    @JsonProperty("PolicyId")
    public String policyId;
    public DeletePolicyRequest withPolicyId(String policyId) {
        this.policyId = policyId;
        return this;
    }
}