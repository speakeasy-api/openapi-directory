package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetWorkflowExecutionHistoryInput {
    @JsonProperty("domain")
    public String domain;
    public GetWorkflowExecutionHistoryInput withDomain(String domain) {
        this.domain = domain;
        return this;
    }
    @JsonProperty("execution")
    public WorkflowExecution execution;
    public GetWorkflowExecutionHistoryInput withExecution(WorkflowExecution execution) {
        this.execution = execution;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maximumPageSize")
    public Long maximumPageSize;
    public GetWorkflowExecutionHistoryInput withMaximumPageSize(Long maximumPageSize) {
        this.maximumPageSize = maximumPageSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public GetWorkflowExecutionHistoryInput withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reverseOrder")
    public Boolean reverseOrder;
    public GetWorkflowExecutionHistoryInput withReverseOrder(Boolean reverseOrder) {
        this.reverseOrder = reverseOrder;
        return this;
    }
}