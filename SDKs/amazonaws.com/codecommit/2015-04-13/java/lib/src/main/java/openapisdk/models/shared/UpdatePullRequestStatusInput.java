package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdatePullRequestStatusInput {
    @JsonProperty("pullRequestId")
    public String pullRequestId;
    public UpdatePullRequestStatusInput withPullRequestId(String pullRequestId) {
        this.pullRequestId = pullRequestId;
        return this;
    }
    @JsonProperty("pullRequestStatus")
    public PullRequestStatusEnumEnum pullRequestStatus;
    public UpdatePullRequestStatusInput withPullRequestStatus(PullRequestStatusEnumEnum pullRequestStatus) {
        this.pullRequestStatus = pullRequestStatus;
        return this;
    }
}