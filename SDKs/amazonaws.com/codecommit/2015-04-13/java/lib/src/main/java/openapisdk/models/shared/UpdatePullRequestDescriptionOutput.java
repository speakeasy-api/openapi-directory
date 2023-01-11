package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdatePullRequestDescriptionOutput {
    @JsonProperty("pullRequest")
    public PullRequest pullRequest;
    public UpdatePullRequestDescriptionOutput withPullRequest(PullRequest pullRequest) {
        this.pullRequest = pullRequest;
        return this;
    }
}