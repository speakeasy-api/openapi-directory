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
 * IssueSearchResultItem
 * Issue Search Result Item
**/
public class IssueSearchResultItem {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("active_lock_reason")
    public String activeLockReason;
    public IssueSearchResultItem withActiveLockReason(String activeLockReason) {
        this.activeLockReason = activeLockReason;
        return this;
    }
    @JsonProperty("assignee")
    public IssueSearchResultItemSimpleUser assignee;
    public IssueSearchResultItem withAssignee(IssueSearchResultItemSimpleUser assignee) {
        this.assignee = assignee;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assignees")
    public SimpleUser[] assignees;
    public IssueSearchResultItem withAssignees(SimpleUser[] assignees) {
        this.assignees = assignees;
        return this;
    }
    @JsonProperty("author_association")
    public AuthorAssociationEnum authorAssociation;
    public IssueSearchResultItem withAuthorAssociation(AuthorAssociationEnum authorAssociation) {
        this.authorAssociation = authorAssociation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("body")
    public String body;
    public IssueSearchResultItem withBody(String body) {
        this.body = body;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("body_html")
    public String bodyHtml;
    public IssueSearchResultItem withBodyHtml(String bodyHtml) {
        this.bodyHtml = bodyHtml;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("body_text")
    public String bodyText;
    public IssueSearchResultItem withBodyText(String bodyText) {
        this.bodyText = bodyText;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("closed_at")
    public OffsetDateTime closedAt;
    public IssueSearchResultItem withClosedAt(OffsetDateTime closedAt) {
        this.closedAt = closedAt;
        return this;
    }
    @JsonProperty("comments")
    public Long comments;
    public IssueSearchResultItem withComments(Long comments) {
        this.comments = comments;
        return this;
    }
    @JsonProperty("comments_url")
    public String commentsUrl;
    public IssueSearchResultItem withCommentsUrl(String commentsUrl) {
        this.commentsUrl = commentsUrl;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("created_at")
    public OffsetDateTime createdAt;
    public IssueSearchResultItem withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("draft")
    public Boolean draft;
    public IssueSearchResultItem withDraft(Boolean draft) {
        this.draft = draft;
        return this;
    }
    @JsonProperty("events_url")
    public String eventsUrl;
    public IssueSearchResultItem withEventsUrl(String eventsUrl) {
        this.eventsUrl = eventsUrl;
        return this;
    }
    @JsonProperty("html_url")
    public String htmlUrl;
    public IssueSearchResultItem withHtmlUrl(String htmlUrl) {
        this.htmlUrl = htmlUrl;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public IssueSearchResultItem withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("labels")
    public IssueSearchResultItemLabels[] labels;
    public IssueSearchResultItem withLabels(IssueSearchResultItemLabels[] labels) {
        this.labels = labels;
        return this;
    }
    @JsonProperty("labels_url")
    public String labelsUrl;
    public IssueSearchResultItem withLabelsUrl(String labelsUrl) {
        this.labelsUrl = labelsUrl;
        return this;
    }
    @JsonProperty("locked")
    public Boolean locked;
    public IssueSearchResultItem withLocked(Boolean locked) {
        this.locked = locked;
        return this;
    }
    @JsonProperty("milestone")
    public IssueSearchResultItemMilestone milestone;
    public IssueSearchResultItem withMilestone(IssueSearchResultItemMilestone milestone) {
        this.milestone = milestone;
        return this;
    }
    @JsonProperty("node_id")
    public String nodeId;
    public IssueSearchResultItem withNodeId(String nodeId) {
        this.nodeId = nodeId;
        return this;
    }
    @JsonProperty("number")
    public Long number;
    public IssueSearchResultItem withNumber(Long number) {
        this.number = number;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("performed_via_github_app")
    public java.util.Map<String, Object> performedViaGithubApp;
    public IssueSearchResultItem withPerformedViaGithubApp(java.util.Map<String, Object> performedViaGithubApp) {
        this.performedViaGithubApp = performedViaGithubApp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pull_request")
    public IssueSearchResultItemPullRequest pullRequest;
    public IssueSearchResultItem withPullRequest(IssueSearchResultItemPullRequest pullRequest) {
        this.pullRequest = pullRequest;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("repository")
    public Repository repository;
    public IssueSearchResultItem withRepository(Repository repository) {
        this.repository = repository;
        return this;
    }
    @JsonProperty("repository_url")
    public String repositoryUrl;
    public IssueSearchResultItem withRepositoryUrl(String repositoryUrl) {
        this.repositoryUrl = repositoryUrl;
        return this;
    }
    @JsonProperty("score")
    public Double score;
    public IssueSearchResultItem withScore(Double score) {
        this.score = score;
        return this;
    }
    @JsonProperty("state")
    public String state;
    public IssueSearchResultItem withState(String state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("text_matches")
    public SearchResultTextMatches[] textMatches;
    public IssueSearchResultItem withTextMatches(SearchResultTextMatches[] textMatches) {
        this.textMatches = textMatches;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeline_url")
    public String timelineUrl;
    public IssueSearchResultItem withTimelineUrl(String timelineUrl) {
        this.timelineUrl = timelineUrl;
        return this;
    }
    @JsonProperty("title")
    public String title;
    public IssueSearchResultItem withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("updated_at")
    public OffsetDateTime updatedAt;
    public IssueSearchResultItem withUpdatedAt(OffsetDateTime updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public IssueSearchResultItem withUrl(String url) {
        this.url = url;
        return this;
    }
    @JsonProperty("user")
    public IssueSearchResultItemSimpleUser user;
    public IssueSearchResultItem withUser(IssueSearchResultItemSimpleUser user) {
        this.user = user;
        return this;
    }
}