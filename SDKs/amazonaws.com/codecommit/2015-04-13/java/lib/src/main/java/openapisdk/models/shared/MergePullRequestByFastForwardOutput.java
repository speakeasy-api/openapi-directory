package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class MergePullRequestByFastForwardOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pullRequest")
    public PullRequest pullRequest;
    public MergePullRequestByFastForwardOutput withPullRequest(PullRequest pullRequest) {
        this.pullRequest = pullRequest;
        return this;
    }
}