package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * IssueSimple
 * Issue Simple
**/
public class IssueSimple {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("active_lock_reason")
    public String activeLockReason;
    public IssueSimple withActiveLockReason(String activeLockReason) {
        this.activeLockReason = activeLockReason;
        return this;
    }
    @JsonProperty("assignee")
    public IssueSimpleSimpleUser assignee;
    public IssueSimple withAssignee(IssueSimpleSimpleUser assignee) {
        this.assignee = assignee;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assignees")
    public SimpleUser[] assignees;
    public IssueSimple withAssignees(SimpleUser[] assignees) {
        this.assignees = assignees;
        return this;
    }
    @JsonProperty("author_association")
    public AuthorAssociationEnum authorAssociation;
    public IssueSimple withAuthorAssociation(AuthorAssociationEnum authorAssociation) {
        this.authorAssociation = authorAssociation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("body")
    public String body;
    public IssueSimple withBody(String body) {
        this.body = body;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("body_html")
    public String bodyHtml;
    public IssueSimple withBodyHtml(String bodyHtml) {
        this.bodyHtml = bodyHtml;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("body_text")
    public String bodyText;
    public IssueSimple withBodyText(String bodyText) {
        this.bodyText = bodyText;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("closed_at")
    public OffsetDateTime closedAt;
    public IssueSimple withClosedAt(OffsetDateTime closedAt) {
        this.closedAt = closedAt;
        return this;
    }
    @JsonProperty("comments")
    public Long comments;
    public IssueSimple withComments(Long comments) {
        this.comments = comments;
        return this;
    }
    @JsonProperty("comments_url")
    public String commentsUrl;
    public IssueSimple withCommentsUrl(String commentsUrl) {
        this.commentsUrl = commentsUrl;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("created_at")
    public OffsetDateTime createdAt;
    public IssueSimple withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonProperty("events_url")
    public String eventsUrl;
    public IssueSimple withEventsUrl(String eventsUrl) {
        this.eventsUrl = eventsUrl;
        return this;
    }
    @JsonProperty("html_url")
    public String htmlUrl;
    public IssueSimple withHtmlUrl(String htmlUrl) {
        this.htmlUrl = htmlUrl;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public IssueSimple withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("labels")
    public Label[] labels;
    public IssueSimple withLabels(Label[] labels) {
        this.labels = labels;
        return this;
    }
    @JsonProperty("labels_url")
    public String labelsUrl;
    public IssueSimple withLabelsUrl(String labelsUrl) {
        this.labelsUrl = labelsUrl;
        return this;
    }
    @JsonProperty("locked")
    public Boolean locked;
    public IssueSimple withLocked(Boolean locked) {
        this.locked = locked;
        return this;
    }
    @JsonProperty("milestone")
    public IssueSimpleMilestone milestone;
    public IssueSimple withMilestone(IssueSimpleMilestone milestone) {
        this.milestone = milestone;
        return this;
    }
    @JsonProperty("node_id")
    public String nodeId;
    public IssueSimple withNodeId(String nodeId) {
        this.nodeId = nodeId;
        return this;
    }
    @JsonProperty("number")
    public Long number;
    public IssueSimple withNumber(Long number) {
        this.number = number;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("performed_via_github_app")
    public java.util.Map<String, Object> performedViaGithubApp;
    public IssueSimple withPerformedViaGithubApp(java.util.Map<String, Object> performedViaGithubApp) {
        this.performedViaGithubApp = performedViaGithubApp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pull_request")
    public IssueSimplePullRequest pullRequest;
    public IssueSimple withPullRequest(IssueSimplePullRequest pullRequest) {
        this.pullRequest = pullRequest;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("repository")
    public Repository repository;
    public IssueSimple withRepository(Repository repository) {
        this.repository = repository;
        return this;
    }
    @JsonProperty("repository_url")
    public String repositoryUrl;
    public IssueSimple withRepositoryUrl(String repositoryUrl) {
        this.repositoryUrl = repositoryUrl;
        return this;
    }
    @JsonProperty("state")
    public String state;
    public IssueSimple withState(String state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeline_url")
    public String timelineUrl;
    public IssueSimple withTimelineUrl(String timelineUrl) {
        this.timelineUrl = timelineUrl;
        return this;
    }
    @JsonProperty("title")
    public String title;
    public IssueSimple withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("updated_at")
    public OffsetDateTime updatedAt;
    public IssueSimple withUpdatedAt(OffsetDateTime updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public IssueSimple withUrl(String url) {
        this.url = url;
        return this;
    }
    @JsonProperty("user")
    public IssueSimpleSimpleUser user;
    public IssueSimple withUser(IssueSimpleSimpleUser user) {
        this.user = user;
        return this;
    }
}