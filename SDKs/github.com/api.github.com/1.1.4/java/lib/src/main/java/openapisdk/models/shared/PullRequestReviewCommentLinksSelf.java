package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PullRequestReviewCommentLinksSelf {
    @JsonProperty("href")
    public String href;
    public PullRequestReviewCommentLinksSelf withHref(String href) {
        this.href = href;
        return this;
    }
}