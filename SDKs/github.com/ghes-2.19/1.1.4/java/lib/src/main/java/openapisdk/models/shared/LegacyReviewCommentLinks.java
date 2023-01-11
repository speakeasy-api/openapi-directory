package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class LegacyReviewCommentLinks {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("html")
    public LegacyReviewCommentLinksHtml html;
    public LegacyReviewCommentLinks withHtml(LegacyReviewCommentLinksHtml html) {
        this.html = html;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pull_request")
    public LegacyReviewCommentLinksPullRequest pullRequest;
    public LegacyReviewCommentLinks withPullRequest(LegacyReviewCommentLinksPullRequest pullRequest) {
        this.pullRequest = pullRequest;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("self")
    public LegacyReviewCommentLinksSelf self;
    public LegacyReviewCommentLinks withSelf(LegacyReviewCommentLinksSelf self) {
        this.self = self;
        return this;
    }
}