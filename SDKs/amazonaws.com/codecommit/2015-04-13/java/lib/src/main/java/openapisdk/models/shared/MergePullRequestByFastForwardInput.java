package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class MergePullRequestByFastForwardInput {
    @JsonProperty("pullRequestId")
    public String pullRequestId;
    public MergePullRequestByFastForwardInput withPullRequestId(String pullRequestId) {
        this.pullRequestId = pullRequestId;
        return this;
    }
    @JsonProperty("repositoryName")
    public String repositoryName;
    public MergePullRequestByFastForwardInput withRepositoryName(String repositoryName) {
        this.repositoryName = repositoryName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceCommitId")
    public String sourceCommitId;
    public MergePullRequestByFastForwardInput withSourceCommitId(String sourceCommitId) {
        this.sourceCommitId = sourceCommitId;
        return this;
    }
}