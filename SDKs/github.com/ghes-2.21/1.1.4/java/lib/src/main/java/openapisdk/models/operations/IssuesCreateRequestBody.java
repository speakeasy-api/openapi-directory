package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class IssuesCreateRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assignee")
    public String assignee;
    public IssuesCreateRequestBody withAssignee(String assignee) {
        this.assignee = assignee;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assignees")
    public String[] assignees;
    public IssuesCreateRequestBody withAssignees(String[] assignees) {
        this.assignees = assignees;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("body")
    public String body;
    public IssuesCreateRequestBody withBody(String body) {
        this.body = body;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public Object[] labels;
    public IssuesCreateRequestBody withLabels(Object[] labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("milestone")
    public Object milestone;
    public IssuesCreateRequestBody withMilestone(Object milestone) {
        this.milestone = milestone;
        return this;
    }
    @JsonProperty("title")
    public Object title;
    public IssuesCreateRequestBody withTitle(Object title) {
        this.title = title;
        return this;
    }
}