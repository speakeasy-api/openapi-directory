package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * UpdateBranchResult
 *  The result structure for the update branch request. 
**/
public class UpdateBranchResult {
    @JsonProperty("branch")
    public Branch branch;
    public UpdateBranchResult withBranch(Branch branch) {
        this.branch = branch;
        return this;
    }
}