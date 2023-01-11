package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetBranchResult {
    @JsonProperty("branch")
    public Branch branch;
    public GetBranchResult withBranch(Branch branch) {
        this.branch = branch;
        return this;
    }
}