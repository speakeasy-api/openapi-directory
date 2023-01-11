package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * PullRequestSimpleMilestone
 * A collection of related issues and pull requests.
**/
public class PullRequestSimpleMilestone {
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("closed_at")
    public OffsetDateTime closedAt;
    public PullRequestSimpleMilestone withClosedAt(OffsetDateTime closedAt) {
        this.closedAt = closedAt;
        return this;
    }
    @JsonProperty("closed_issues")
    public Long closedIssues;
    public PullRequestSimpleMilestone withClosedIssues(Long closedIssues) {
        this.closedIssues = closedIssues;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("created_at")
    public OffsetDateTime createdAt;
    public PullRequestSimpleMilestone withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonProperty("creator")
    public PullRequestSimpleMilestoneSimpleUser creator;
    public PullRequestSimpleMilestone withCreator(PullRequestSimpleMilestoneSimpleUser creator) {
        this.creator = creator;
        return this;
    }
    @JsonProperty("description")
    public String description;
    public PullRequestSimpleMilestone withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("due_on")
    public OffsetDateTime dueOn;
    public PullRequestSimpleMilestone withDueOn(OffsetDateTime dueOn) {
        this.dueOn = dueOn;
        return this;
    }
    @JsonProperty("html_url")
    public String htmlUrl;
    public PullRequestSimpleMilestone withHtmlUrl(String htmlUrl) {
        this.htmlUrl = htmlUrl;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public PullRequestSimpleMilestone withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("labels_url")
    public String labelsUrl;
    public PullRequestSimpleMilestone withLabelsUrl(String labelsUrl) {
        this.labelsUrl = labelsUrl;
        return this;
    }
    @JsonProperty("node_id")
    public String nodeId;
    public PullRequestSimpleMilestone withNodeId(String nodeId) {
        this.nodeId = nodeId;
        return this;
    }
    @JsonProperty("number")
    public Long number;
    public PullRequestSimpleMilestone withNumber(Long number) {
        this.number = number;
        return this;
    }
    @JsonProperty("open_issues")
    public Long openIssues;
    public PullRequestSimpleMilestone withOpenIssues(Long openIssues) {
        this.openIssues = openIssues;
        return this;
    }
    @JsonProperty("state")
    public PullRequestSimpleMilestoneStateEnum state;
    public PullRequestSimpleMilestone withState(PullRequestSimpleMilestoneStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonProperty("title")
    public String title;
    public PullRequestSimpleMilestone withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("updated_at")
    public OffsetDateTime updatedAt;
    public PullRequestSimpleMilestone withUpdatedAt(OffsetDateTime updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public PullRequestSimpleMilestone withUrl(String url) {
        this.url = url;
        return this;
    }
}