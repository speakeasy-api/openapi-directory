package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PullRequestReviewCommentLinksHtml {
    @JsonProperty("href")
    public String href;
    public PullRequestReviewCommentLinksHtml withHref(String href) {
        this.href = href;
        return this;
    }
}