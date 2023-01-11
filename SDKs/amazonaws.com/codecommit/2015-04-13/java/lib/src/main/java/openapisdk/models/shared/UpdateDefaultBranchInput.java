package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * UpdateDefaultBranchInput
 * Represents the input of an update default branch operation.
**/
public class UpdateDefaultBranchInput {
    @JsonProperty("defaultBranchName")
    public String defaultBranchName;
    public UpdateDefaultBranchInput withDefaultBranchName(String defaultBranchName) {
        this.defaultBranchName = defaultBranchName;
        return this;
    }
    @JsonProperty("repositoryName")
    public String repositoryName;
    public UpdateDefaultBranchInput withRepositoryName(String repositoryName) {
        this.repositoryName = repositoryName;
        return this;
    }
}