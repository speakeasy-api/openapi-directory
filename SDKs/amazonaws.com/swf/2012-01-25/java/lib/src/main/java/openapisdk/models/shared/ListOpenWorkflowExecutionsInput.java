package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListOpenWorkflowExecutionsInput {
    @JsonProperty("domain")
    public String domain;
    public ListOpenWorkflowExecutionsInput withDomain(String domain) {
        this.domain = domain;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("executionFilter")
    public WorkflowExecutionFilter executionFilter;
    public ListOpenWorkflowExecutionsInput withExecutionFilter(WorkflowExecutionFilter executionFilter) {
        this.executionFilter = executionFilter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maximumPageSize")
    public Long maximumPageSize;
    public ListOpenWorkflowExecutionsInput withMaximumPageSize(Long maximumPageSize) {
        this.maximumPageSize = maximumPageSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListOpenWorkflowExecutionsInput withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reverseOrder")
    public Boolean reverseOrder;
    public ListOpenWorkflowExecutionsInput withReverseOrder(Boolean reverseOrder) {
        this.reverseOrder = reverseOrder;
        return this;
    }
    @JsonProperty("startTimeFilter")
    public ExecutionTimeFilter startTimeFilter;
    public ListOpenWorkflowExecutionsInput withStartTimeFilter(ExecutionTimeFilter startTimeFilter) {
        this.startTimeFilter = startTimeFilter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tagFilter")
    public TagFilter tagFilter;
    public ListOpenWorkflowExecutionsInput withTagFilter(TagFilter tagFilter) {
        this.tagFilter = tagFilter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("typeFilter")
    public WorkflowTypeFilter typeFilter;
    public ListOpenWorkflowExecutionsInput withTypeFilter(WorkflowTypeFilter typeFilter) {
        this.typeFilter = typeFilter;
        return this;
    }
}