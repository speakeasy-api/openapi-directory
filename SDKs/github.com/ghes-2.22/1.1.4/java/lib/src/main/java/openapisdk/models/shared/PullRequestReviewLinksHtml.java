package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PullRequestReviewLinksHtml {
    @JsonProperty("href")
    public String href;
    public PullRequestReviewLinksHtml withHref(String href) {
        this.href = href;
        return this;
    }
}