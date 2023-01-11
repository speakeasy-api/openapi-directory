package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PullsMergeRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("commit_message")
    public String commitMessage;
    public PullsMergeRequestBody withCommitMessage(String commitMessage) {
        this.commitMessage = commitMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("commit_title")
    public String commitTitle;
    public PullsMergeRequestBody withCommitTitle(String commitTitle) {
        this.commitTitle = commitTitle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("merge_method")
    public PullsMergeRequestBodyMergeMethodEnum mergeMethod;
    public PullsMergeRequestBody withMergeMethod(PullsMergeRequestBodyMergeMethodEnum mergeMethod) {
        this.mergeMethod = mergeMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sha")
    public String sha;
    public PullsMergeRequestBody withSha(String sha) {
        this.sha = sha;
        return this;
    }
}