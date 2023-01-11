package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetCommitInput
 * Represents the input of a get commit operation.
**/
public class GetCommitInput {
    @JsonProperty("commitId")
    public String commitId;
    public GetCommitInput withCommitId(String commitId) {
        this.commitId = commitId;
        return this;
    }
    @JsonProperty("repositoryName")
    public String repositoryName;
    public GetCommitInput withRepositoryName(String repositoryName) {
        this.repositoryName = repositoryName;
        return this;
    }
}