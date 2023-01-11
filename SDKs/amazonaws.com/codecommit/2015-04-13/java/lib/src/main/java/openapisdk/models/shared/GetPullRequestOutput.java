package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetPullRequestOutput {
    @JsonProperty("pullRequest")
    public PullRequest pullRequest;
    public GetPullRequestOutput withPullRequest(PullRequest pullRequest) {
        this.pullRequest = pullRequest;
        return this;
    }
}