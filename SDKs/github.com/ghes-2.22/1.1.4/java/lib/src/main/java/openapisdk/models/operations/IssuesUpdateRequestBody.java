package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class IssuesUpdateRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assignee")
    public String assignee;
    public IssuesUpdateRequestBody withAssignee(String assignee) {
        this.assignee = assignee;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assignees")
    public String[] assignees;
    public IssuesUpdateRequestBody withAssignees(String[] assignees) {
        this.assignees = assignees;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("body")
    public String body;
    public IssuesUpdateRequestBody withBody(String body) {
        this.body = body;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public Object[] labels;
    public IssuesUpdateRequestBody withLabels(Object[] labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("milestone")
    public Object milestone;
    public IssuesUpdateRequestBody withMilestone(Object milestone) {
        this.milestone = milestone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public IssuesUpdateRequestBodyStateEnum state;
    public IssuesUpdateRequestBody withState(IssuesUpdateRequestBodyStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public Object title;
    public IssuesUpdateRequestBody withTitle(Object title) {
        this.title = title;
        return this;
    }
}