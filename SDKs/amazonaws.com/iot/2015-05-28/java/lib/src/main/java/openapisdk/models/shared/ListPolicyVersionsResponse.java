package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListPolicyVersionsResponse
 * The output from the ListPolicyVersions operation.
**/
public class ListPolicyVersionsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("policyVersions")
    public PolicyVersion[] policyVersions;
    public ListPolicyVersionsResponse withPolicyVersions(PolicyVersion[] policyVersions) {
        this.policyVersions = policyVersions;
        return this;
    }
}