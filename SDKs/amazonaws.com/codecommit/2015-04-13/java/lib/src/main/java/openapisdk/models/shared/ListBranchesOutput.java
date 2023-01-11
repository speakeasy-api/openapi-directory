package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListBranchesOutput
 * Represents the output of a list branches operation.
**/
public class ListBranchesOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("branches")
    public String[] branches;
    public ListBranchesOutput withBranches(String[] branches) {
        this.branches = branches;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListBranchesOutput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}