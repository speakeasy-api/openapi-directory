package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdatePullRequestStatusOutput {
    @JsonProperty("pullRequest")
    public PullRequest pullRequest;
    public UpdatePullRequestStatusOutput withPullRequest(PullRequest pullRequest) {
        this.pullRequest = pullRequest;
        return this;
    }
}