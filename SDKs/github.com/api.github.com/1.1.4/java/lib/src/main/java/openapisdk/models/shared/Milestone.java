package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * Milestone
 * A collection of related issues and pull requests.
**/
public class Milestone {
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("closed_at")
    public OffsetDateTime closedAt;
    public Milestone withClosedAt(OffsetDateTime closedAt) {
        this.closedAt = closedAt;
        return this;
    }
    @JsonProperty("closed_issues")
    public Long closedIssues;
    public Milestone withClosedIssues(Long closedIssues) {
        this.closedIssues = closedIssues;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("created_at")
    public OffsetDateTime createdAt;
    public Milestone withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonProperty("creator")
    public MilestoneSimpleUser creator;
    public Milestone withCreator(MilestoneSimpleUser creator) {
        this.creator = creator;
        return this;
    }
    @JsonProperty("description")
    public String description;
    public Milestone withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("due_on")
    public OffsetDateTime dueOn;
    public Milestone withDueOn(OffsetDateTime dueOn) {
        this.dueOn = dueOn;
        return this;
    }
    @JsonProperty("html_url")
    public String htmlUrl;
    public Milestone withHtmlUrl(String htmlUrl) {
        this.htmlUrl = htmlUrl;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public Milestone withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("labels_url")
    public String labelsUrl;
    public Milestone withLabelsUrl(String labelsUrl) {
        this.labelsUrl = labelsUrl;
        return this;
    }
    @JsonProperty("node_id")
    public String nodeId;
    public Milestone withNodeId(String nodeId) {
        this.nodeId = nodeId;
        return this;
    }
    @JsonProperty("number")
    public Long number;
    public Milestone withNumber(Long number) {
        this.number = number;
        return this;
    }
    @JsonProperty("open_issues")
    public Long openIssues;
    public Milestone withOpenIssues(Long openIssues) {
        this.openIssues = openIssues;
        return this;
    }
    @JsonProperty("state")
    public MilestoneStateEnum state;
    public Milestone withState(MilestoneStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonProperty("title")
    public String title;
    public Milestone withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("updated_at")
    public OffsetDateTime updatedAt;
    public Milestone withUpdatedAt(OffsetDateTime updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public Milestone withUrl(String url) {
        this.url = url;
        return this;
    }
}