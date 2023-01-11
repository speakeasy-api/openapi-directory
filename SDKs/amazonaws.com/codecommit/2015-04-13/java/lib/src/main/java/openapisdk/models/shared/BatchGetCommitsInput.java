package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class BatchGetCommitsInput {
    @JsonProperty("commitIds")
    public String[] commitIds;
    public BatchGetCommitsInput withCommitIds(String[] commitIds) {
        this.commitIds = commitIds;
        return this;
    }
    @JsonProperty("repositoryName")
    public String repositoryName;
    public BatchGetCommitsInput withRepositoryName(String repositoryName) {
        this.repositoryName = repositoryName;
        return this;
    }
}