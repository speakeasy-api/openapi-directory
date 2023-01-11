package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PullRequestReviewCommentLinksPullRequest {
    @JsonProperty("href")
    public String href;
    public PullRequestReviewCommentLinksPullRequest withHref(String href) {
        this.href = href;
        return this;
    }
}