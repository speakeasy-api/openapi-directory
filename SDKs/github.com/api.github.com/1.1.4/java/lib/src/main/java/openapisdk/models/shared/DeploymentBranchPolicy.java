package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DeploymentBranchPolicy
 * The type of deployment branch policy for this environment. To allow all branches to deploy, set to `null`.
**/
public class DeploymentBranchPolicy {
    @JsonProperty("custom_branch_policies")
    public Boolean customBranchPolicies;
    public DeploymentBranchPolicy withCustomBranchPolicies(Boolean customBranchPolicies) {
        this.customBranchPolicies = customBranchPolicies;
        return this;
    }
    @JsonProperty("protected_branches")
    public Boolean protectedBranches;
    public DeploymentBranchPolicy withProtectedBranches(Boolean protectedBranches) {
        this.protectedBranches = protectedBranches;
        return this;
    }
}