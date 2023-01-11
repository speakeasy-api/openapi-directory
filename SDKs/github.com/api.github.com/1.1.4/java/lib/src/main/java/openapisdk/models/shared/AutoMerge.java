package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * AutoMerge
 * The status of auto merging a pull request.
**/
public class AutoMerge {
    @JsonProperty("commit_message")
    public String commitMessage;
    public AutoMerge withCommitMessage(String commitMessage) {
        this.commitMessage = commitMessage;
        return this;
    }
    @JsonProperty("commit_title")
    public String commitTitle;
    public AutoMerge withCommitTitle(String commitTitle) {
        this.commitTitle = commitTitle;
        return this;
    }
    @JsonProperty("enabled_by")
    public SimpleUser enabledBy;
    public AutoMerge withEnabledBy(SimpleUser enabledBy) {
        this.enabledBy = enabledBy;
        return this;
    }
    @JsonProperty("merge_method")
    public AutoMergeMergeMethodEnum mergeMethod;
    public AutoMerge withMergeMethod(AutoMergeMergeMethodEnum mergeMethod) {
        this.mergeMethod = mergeMethod;
        return this;
    }
}