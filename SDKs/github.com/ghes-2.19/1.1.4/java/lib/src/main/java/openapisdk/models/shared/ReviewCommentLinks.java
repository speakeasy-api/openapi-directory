package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ReviewCommentLinks {
    @JsonProperty("html")
    public Link html;
    public ReviewCommentLinks withHtml(Link html) {
        this.html = html;
        return this;
    }
    @JsonProperty("pull_request")
    public Link pullRequest;
    public ReviewCommentLinks withPullRequest(Link pullRequest) {
        this.pullRequest = pullRequest;
        return this;
    }
    @JsonProperty("self")
    public Link self;
    public ReviewCommentLinks withSelf(Link self) {
        this.self = self;
        return this;
    }
}