/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PullRequestSimpleLinks {
    /**
     * Hypermedia Link
     */
    @JsonProperty("comments")
    public Link comments;

    public PullRequestSimpleLinks withComments(Link comments) {
        this.comments = comments;
        return this;
    }
    
    /**
     * Hypermedia Link
     */
    @JsonProperty("commits")
    public Link commits;

    public PullRequestSimpleLinks withCommits(Link commits) {
        this.commits = commits;
        return this;
    }
    
    /**
     * Hypermedia Link
     */
    @JsonProperty("html")
    public Link html;

    public PullRequestSimpleLinks withHtml(Link html) {
        this.html = html;
        return this;
    }
    
    /**
     * Hypermedia Link
     */
    @JsonProperty("issue")
    public Link issue;

    public PullRequestSimpleLinks withIssue(Link issue) {
        this.issue = issue;
        return this;
    }
    
    /**
     * Hypermedia Link
     */
    @JsonProperty("review_comment")
    public Link reviewComment;

    public PullRequestSimpleLinks withReviewComment(Link reviewComment) {
        this.reviewComment = reviewComment;
        return this;
    }
    
    /**
     * Hypermedia Link
     */
    @JsonProperty("review_comments")
    public Link reviewComments;

    public PullRequestSimpleLinks withReviewComments(Link reviewComments) {
        this.reviewComments = reviewComments;
        return this;
    }
    
    /**
     * Hypermedia Link
     */
    @JsonProperty("self")
    public Link self;

    public PullRequestSimpleLinks withSelf(Link self) {
        this.self = self;
        return this;
    }
    
    /**
     * Hypermedia Link
     */
    @JsonProperty("statuses")
    public Link statuses;

    public PullRequestSimpleLinks withStatuses(Link statuses) {
        this.statuses = statuses;
        return this;
    }
    
    public PullRequestSimpleLinks(@JsonProperty("comments") Link comments, @JsonProperty("commits") Link commits, @JsonProperty("html") Link html, @JsonProperty("issue") Link issue, @JsonProperty("review_comment") Link reviewComment, @JsonProperty("review_comments") Link reviewComments, @JsonProperty("self") Link self, @JsonProperty("statuses") Link statuses) {
        this.comments = comments;
        this.commits = commits;
        this.html = html;
        this.issue = issue;
        this.reviewComment = reviewComment;
        this.reviewComments = reviewComments;
        this.self = self;
        this.statuses = statuses;
  }
}
