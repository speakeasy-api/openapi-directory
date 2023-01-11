package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DeleteBranchInput
 * Represents the input of a delete branch operation.
**/
public class DeleteBranchInput {
    @JsonProperty("branchName")
    public String branchName;
    public DeleteBranchInput withBranchName(String branchName) {
        this.branchName = branchName;
        return this;
    }
    @JsonProperty("repositoryName")
    public String repositoryName;
    public DeleteBranchInput withRepositoryName(String repositoryName) {
        this.repositoryName = repositoryName;
        return this;
    }
}