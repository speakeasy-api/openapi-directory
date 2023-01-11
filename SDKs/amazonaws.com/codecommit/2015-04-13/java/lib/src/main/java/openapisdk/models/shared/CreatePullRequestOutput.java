package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreatePullRequestOutput {
    @JsonProperty("pullRequest")
    public PullRequest pullRequest;
    public CreatePullRequestOutput withPullRequest(PullRequest pullRequest) {
        this.pullRequest = pullRequest;
        return this;
    }
}