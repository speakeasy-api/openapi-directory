package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListClosedWorkflowExecutionsInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("closeStatusFilter")
    public CloseStatusFilter closeStatusFilter;
    public ListClosedWorkflowExecutionsInput withCloseStatusFilter(CloseStatusFilter closeStatusFilter) {
        this.closeStatusFilter = closeStatusFilter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("closeTimeFilter")
    public ExecutionTimeFilter closeTimeFilter;
    public ListClosedWorkflowExecutionsInput withCloseTimeFilter(ExecutionTimeFilter closeTimeFilter) {
        this.closeTimeFilter = closeTimeFilter;
        return this;
    }
    @JsonProperty("domain")
    public String domain;
    public ListClosedWorkflowExecutionsInput withDomain(String domain) {
        this.domain = domain;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("executionFilter")
    public WorkflowExecutionFilter executionFilter;
    public ListClosedWorkflowExecutionsInput withExecutionFilter(WorkflowExecutionFilter executionFilter) {
        this.executionFilter = executionFilter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maximumPageSize")
    public Long maximumPageSize;
    public ListClosedWorkflowExecutionsInput withMaximumPageSize(Long maximumPageSize) {
        this.maximumPageSize = maximumPageSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListClosedWorkflowExecutionsInput withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reverseOrder")
    public Boolean reverseOrder;
    public ListClosedWorkflowExecutionsInput withReverseOrder(Boolean reverseOrder) {
        this.reverseOrder = reverseOrder;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startTimeFilter")
    public ExecutionTimeFilter startTimeFilter;
    public ListClosedWorkflowExecutionsInput withStartTimeFilter(ExecutionTimeFilter startTimeFilter) {
        this.startTimeFilter = startTimeFilter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tagFilter")
    public TagFilter tagFilter;
    public ListClosedWorkflowExecutionsInput withTagFilter(TagFilter tagFilter) {
        this.tagFilter = tagFilter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("typeFilter")
    public WorkflowTypeFilter typeFilter;
    public ListClosedWorkflowExecutionsInput withTypeFilter(WorkflowTypeFilter typeFilter) {
        this.typeFilter = typeFilter;
        return this;
    }
}