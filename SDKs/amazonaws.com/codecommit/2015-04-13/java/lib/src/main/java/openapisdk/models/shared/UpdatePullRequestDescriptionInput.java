package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdatePullRequestDescriptionInput {
    @JsonProperty("description")
    public String description;
    public UpdatePullRequestDescriptionInput withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("pullRequestId")
    public String pullRequestId;
    public UpdatePullRequestDescriptionInput withPullRequestId(String pullRequestId) {
        this.pullRequestId = pullRequestId;
        return this;
    }
}