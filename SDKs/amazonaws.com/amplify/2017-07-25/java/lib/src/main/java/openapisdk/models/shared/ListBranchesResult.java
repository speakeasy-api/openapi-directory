package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListBranchesResult
 *  The result structure for the list branches request. 
**/
public class ListBranchesResult {
    @JsonProperty("branches")
    public Branch[] branches;
    public ListBranchesResult withBranches(Branch[] branches) {
        this.branches = branches;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListBranchesResult withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}