package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListManagedPoliciesInPermissionSetResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AttachedManagedPolicies")
    public AttachedManagedPolicy[] attachedManagedPolicies;
    public ListManagedPoliciesInPermissionSetResponse withAttachedManagedPolicies(AttachedManagedPolicy[] attachedManagedPolicies) {
        this.attachedManagedPolicies = attachedManagedPolicies;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListManagedPoliciesInPermissionSetResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}