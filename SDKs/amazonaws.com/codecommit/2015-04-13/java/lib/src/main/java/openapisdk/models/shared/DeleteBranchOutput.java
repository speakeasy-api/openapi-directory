package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DeleteBranchOutput
 * Represents the output of a delete branch operation.
**/
public class DeleteBranchOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deletedBranch")
    public BranchInfo deletedBranch;
    public DeleteBranchOutput withDeletedBranch(BranchInfo deletedBranch) {
        this.deletedBranch = deletedBranch;
        return this;
    }
}