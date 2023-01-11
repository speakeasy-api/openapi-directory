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
 * IssueEvent
 * Issue Event
**/
public class IssueEvent {
    @JsonProperty("actor")
    public IssueEventSimpleUser actor;
    public IssueEvent withActor(IssueEventSimpleUser actor) {
        this.actor = actor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assignee")
    public IssueEventSimpleUser assignee;
    public IssueEvent withAssignee(IssueEventSimpleUser assignee) {
        this.assignee = assignee;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assigner")
    public IssueEventSimpleUser assigner;
    public IssueEvent withAssigner(IssueEventSimpleUser assigner) {
        this.assigner = assigner;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("author_association")
    public AuthorAssociationEnum authorAssociation;
    public IssueEvent withAuthorAssociation(AuthorAssociationEnum authorAssociation) {
        this.authorAssociation = authorAssociation;
        return this;
    }
    @JsonProperty("commit_id")
    public String commitId;
    public IssueEvent withCommitId(String commitId) {
        this.commitId = commitId;
        return this;
    }
    @JsonProperty("commit_url")
    public String commitUrl;
    public IssueEvent withCommitUrl(String commitUrl) {
        this.commitUrl = commitUrl;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("created_at")
    public OffsetDateTime createdAt;
    public IssueEvent withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dismissed_review")
    public IssueEventDismissedReview dismissedReview;
    public IssueEvent withDismissedReview(IssueEventDismissedReview dismissedReview) {
        this.dismissedReview = dismissedReview;
        return this;
    }
    @JsonProperty("event")
    public String event;
    public IssueEvent withEvent(String event) {
        this.event = event;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public IssueEvent withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("issue")
    public IssueSimple issue;
    public IssueEvent withIssue(IssueSimple issue) {
        this.issue = issue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("label")
    public IssueEventLabel label;
    public IssueEvent withLabel(IssueEventLabel label) {
        this.label = label;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lock_reason")
    public String lockReason;
    public IssueEvent withLockReason(String lockReason) {
        this.lockReason = lockReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("milestone")
    public IssueEventMilestone milestone;
    public IssueEvent withMilestone(IssueEventMilestone milestone) {
        this.milestone = milestone;
        return this;
    }
    @JsonProperty("node_id")
    public String nodeId;
    public IssueEvent withNodeId(String nodeId) {
        this.nodeId = nodeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("performed_via_github_app")
    public java.util.Map<String, Object> performedViaGithubApp;
    public IssueEvent withPerformedViaGithubApp(java.util.Map<String, Object> performedViaGithubApp) {
        this.performedViaGithubApp = performedViaGithubApp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("project_card")
    public IssueEventProjectCard projectCard;
    public IssueEvent withProjectCard(IssueEventProjectCard projectCard) {
        this.projectCard = projectCard;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rename")
    public IssueEventRename rename;
    public IssueEvent withRename(IssueEventRename rename) {
        this.rename = rename;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requested_reviewer")
    public IssueEventSimpleUser requestedReviewer;
    public IssueEvent withRequestedReviewer(IssueEventSimpleUser requestedReviewer) {
        this.requestedReviewer = requestedReviewer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requested_team")
    public Team requestedTeam;
    public IssueEvent withRequestedTeam(Team requestedTeam) {
        this.requestedTeam = requestedTeam;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("review_requester")
    public IssueEventSimpleUser reviewRequester;
    public IssueEvent withReviewRequester(IssueEventSimpleUser reviewRequester) {
        this.reviewRequester = reviewRequester;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public IssueEvent withUrl(String url) {
        this.url = url;
        return this;
    }
}