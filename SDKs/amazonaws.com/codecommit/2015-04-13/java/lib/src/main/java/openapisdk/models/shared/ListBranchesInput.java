package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListBranchesInput
 * Represents the input of a list branches operation.
**/
public class ListBranchesInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListBranchesInput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonProperty("repositoryName")
    public String repositoryName;
    public ListBranchesInput withRepositoryName(String repositoryName) {
        this.repositoryName = repositoryName;
        return this;
    }
}