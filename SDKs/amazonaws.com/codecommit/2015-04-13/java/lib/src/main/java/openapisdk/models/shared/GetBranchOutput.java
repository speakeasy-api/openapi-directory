package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetBranchOutput
 * Represents the output of a get branch operation.
**/
public class GetBranchOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("branch")
    public BranchInfo branch;
    public GetBranchOutput withBranch(BranchInfo branch) {
        this.branch = branch;
        return this;
    }
}