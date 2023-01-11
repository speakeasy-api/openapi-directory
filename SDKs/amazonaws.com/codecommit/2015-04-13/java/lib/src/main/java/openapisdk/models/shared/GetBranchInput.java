package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetBranchInput
 * Represents the input of a get branch operation.
**/
public class GetBranchInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("branchName")
    public String branchName;
    public GetBranchInput withBranchName(String branchName) {
        this.branchName = branchName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("repositoryName")
    public String repositoryName;
    public GetBranchInput withRepositoryName(String repositoryName) {
        this.repositoryName = repositoryName;
        return this;
    }
}