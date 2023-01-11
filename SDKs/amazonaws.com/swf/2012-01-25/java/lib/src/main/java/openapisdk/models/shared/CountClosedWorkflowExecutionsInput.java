package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CountClosedWorkflowExecutionsInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("closeStatusFilter")
    public CloseStatusFilter closeStatusFilter;
    public CountClosedWorkflowExecutionsInput withCloseStatusFilter(CloseStatusFilter closeStatusFilter) {
        this.closeStatusFilter = closeStatusFilter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("closeTimeFilter")
    public ExecutionTimeFilter closeTimeFilter;
    public CountClosedWorkflowExecutionsInput withCloseTimeFilter(ExecutionTimeFilter closeTimeFilter) {
        this.closeTimeFilter = closeTimeFilter;
        return this;
    }
    @JsonProperty("domain")
    public String domain;
    public CountClosedWorkflowExecutionsInput withDomain(String domain) {
        this.domain = domain;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("executionFilter")
    public WorkflowExecutionFilter executionFilter;
    public CountClosedWorkflowExecutionsInput withExecutionFilter(WorkflowExecutionFilter executionFilter) {
        this.executionFilter = executionFilter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startTimeFilter")
    public ExecutionTimeFilter startTimeFilter;
    public CountClosedWorkflowExecutionsInput withStartTimeFilter(ExecutionTimeFilter startTimeFilter) {
        this.startTimeFilter = startTimeFilter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tagFilter")
    public TagFilter tagFilter;
    public CountClosedWorkflowExecutionsInput withTagFilter(TagFilter tagFilter) {
        this.tagFilter = tagFilter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("typeFilter")
    public WorkflowTypeFilter typeFilter;
    public CountClosedWorkflowExecutionsInput withTypeFilter(WorkflowTypeFilter typeFilter) {
        this.typeFilter = typeFilter;
        return this;
    }
}