package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetPullRequestInput {
    @JsonProperty("pullRequestId")
    public String pullRequestId;
    public GetPullRequestInput withPullRequestId(String pullRequestId) {
        this.pullRequestId = pullRequestId;
        return this;
    }
}