package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdatePullRequestTitleOutput {
    @JsonProperty("pullRequest")
    public PullRequest pullRequest;
    public UpdatePullRequestTitleOutput withPullRequest(PullRequest pullRequest) {
        this.pullRequest = pullRequest;
        return this;
    }
}