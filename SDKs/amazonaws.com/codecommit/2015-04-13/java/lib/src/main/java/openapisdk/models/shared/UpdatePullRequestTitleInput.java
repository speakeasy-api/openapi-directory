package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdatePullRequestTitleInput {
    @JsonProperty("pullRequestId")
    public String pullRequestId;
    public UpdatePullRequestTitleInput withPullRequestId(String pullRequestId) {
        this.pullRequestId = pullRequestId;
        return this;
    }
    @JsonProperty("title")
    public String title;
    public UpdatePullRequestTitleInput withTitle(String title) {
        this.title = title;
        return this;
    }
}