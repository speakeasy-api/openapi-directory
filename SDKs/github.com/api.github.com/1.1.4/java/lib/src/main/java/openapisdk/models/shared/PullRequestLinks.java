package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PullRequestLinks {
    @JsonProperty("comments")
    public Link comments;
    public PullRequestLinks withComments(Link comments) {
        this.comments = comments;
        return this;
    }
    @JsonProperty("commits")
    public Link commits;
    public PullRequestLinks withCommits(Link commits) {
        this.commits = commits;
        return this;
    }
    @JsonProperty("html")
    public Link html;
    public PullRequestLinks withHtml(Link html) {
        this.html = html;
        return this;
    }
    @JsonProperty("issue")
    public Link issue;
    public PullRequestLinks withIssue(Link issue) {
        this.issue = issue;
        return this;
    }
    @JsonProperty("review_comment")
    public Link reviewComment;
    public PullRequestLinks withReviewComment(Link reviewComment) {
        this.reviewComment = reviewComment;
        return this;
    }
    @JsonProperty("review_comments")
    public Link reviewComments;
    public PullRequestLinks withReviewComments(Link reviewComments) {
        this.reviewComments = reviewComments;
        return this;
    }
    @JsonProperty("self")
    public Link self;
    public PullRequestLinks withSelf(Link self) {
        this.self = self;
        return this;
    }
    @JsonProperty("statuses")
    public Link statuses;
    public PullRequestLinks withStatuses(Link statuses) {
        this.statuses = statuses;
        return this;
    }
}