package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IssueEventForIssue
 * Issue Event for Issue
**/
public class IssueEventForIssue {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("actor")
    public SimpleUser actor;
    public IssueEventForIssue withActor(SimpleUser actor) {
        this.actor = actor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("author_association")
    public AuthorAssociationEnum authorAssociation;
    public IssueEventForIssue withAuthorAssociation(AuthorAssociationEnum authorAssociation) {
        this.authorAssociation = authorAssociation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("body")
    public String body;
    public IssueEventForIssue withBody(String body) {
        this.body = body;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("body_html")
    public String bodyHtml;
    public IssueEventForIssue withBodyHtml(String bodyHtml) {
        this.bodyHtml = bodyHtml;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("body_text")
    public String bodyText;
    public IssueEventForIssue withBodyText(String bodyText) {
        this.bodyText = bodyText;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("commit_id")
    public String commitId;
    public IssueEventForIssue withCommitId(String commitId) {
        this.commitId = commitId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("commit_url")
    public String commitUrl;
    public IssueEventForIssue withCommitUrl(String commitUrl) {
        this.commitUrl = commitUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created_at")
    public String createdAt;
    public IssueEventForIssue withCreatedAt(String createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("event")
    public String event;
    public IssueEventForIssue withEvent(String event) {
        this.event = event;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("html_url")
    public String htmlUrl;
    public IssueEventForIssue withHtmlUrl(String htmlUrl) {
        this.htmlUrl = htmlUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public IssueEventForIssue withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("issue_url")
    public String issueUrl;
    public IssueEventForIssue withIssueUrl(String issueUrl) {
        this.issueUrl = issueUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lock_reason")
    public String lockReason;
    public IssueEventForIssue withLockReason(String lockReason) {
        this.lockReason = lockReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public IssueEventForIssue withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("node_id")
    public String nodeId;
    public IssueEventForIssue withNodeId(String nodeId) {
        this.nodeId = nodeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pull_request_url")
    public String pullRequestUrl;
    public IssueEventForIssue withPullRequestUrl(String pullRequestUrl) {
        this.pullRequestUrl = pullRequestUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sha")
    public String sha;
    public IssueEventForIssue withSha(String sha) {
        this.sha = sha;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public String state;
    public IssueEventForIssue withState(String state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("submitted_at")
    public String submittedAt;
    public IssueEventForIssue withSubmittedAt(String submittedAt) {
        this.submittedAt = submittedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updated_at")
    public String updatedAt;
    public IssueEventForIssue withUpdatedAt(String updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public IssueEventForIssue withUrl(String url) {
        this.url = url;
        return this;
    }
}