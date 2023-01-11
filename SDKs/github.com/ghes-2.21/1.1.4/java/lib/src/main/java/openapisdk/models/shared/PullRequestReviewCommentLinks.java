package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PullRequestReviewCommentLinks {
    @JsonProperty("html")
    public PullRequestReviewCommentLinksHtml html;
    public PullRequestReviewCommentLinks withHtml(PullRequestReviewCommentLinksHtml html) {
        this.html = html;
        return this;
    }
    @JsonProperty("pull_request")
    public PullRequestReviewCommentLinksPullRequest pullRequest;
    public PullRequestReviewCommentLinks withPullRequest(PullRequestReviewCommentLinksPullRequest pullRequest) {
        this.pullRequest = pullRequest;
        return this;
    }
    @JsonProperty("self")
    public PullRequestReviewCommentLinksSelf self;
    public PullRequestReviewCommentLinks withSelf(PullRequestReviewCommentLinksSelf self) {
        this.self = self;
        return this;
    }
}