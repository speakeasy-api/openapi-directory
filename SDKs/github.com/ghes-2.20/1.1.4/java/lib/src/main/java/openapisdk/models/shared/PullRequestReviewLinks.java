package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PullRequestReviewLinks {
    @JsonProperty("html")
    public PullRequestReviewLinksHtml html;
    public PullRequestReviewLinks withHtml(PullRequestReviewLinksHtml html) {
        this.html = html;
        return this;
    }
    @JsonProperty("pull_request")
    public PullRequestReviewLinksPullRequest pullRequest;
    public PullRequestReviewLinks withPullRequest(PullRequestReviewLinksPullRequest pullRequest) {
        this.pullRequest = pullRequest;
        return this;
    }
}