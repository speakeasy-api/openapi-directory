package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DeleteBranchResult
 *  The result structure for the delete branch request. 
**/
public class DeleteBranchResult {
    @JsonProperty("branch")
    public Branch branch;
    public DeleteBranchResult withBranch(Branch branch) {
        this.branch = branch;
        return this;
    }
}