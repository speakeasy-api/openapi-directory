package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CreateBranchResult
 *  The result structure for create branch request. 
**/
public class CreateBranchResult {
    @JsonProperty("branch")
    public Branch branch;
    public CreateBranchResult withBranch(Branch branch) {
        this.branch = branch;
        return this;
    }
}