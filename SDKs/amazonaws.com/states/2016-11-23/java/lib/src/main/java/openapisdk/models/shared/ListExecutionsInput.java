package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListExecutionsInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxResults")
    public Long maxResults;
    public ListExecutionsInput withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListExecutionsInput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonProperty("stateMachineArn")
    public String stateMachineArn;
    public ListExecutionsInput withStateMachineArn(String stateMachineArn) {
        this.stateMachineArn = stateMachineArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("statusFilter")
    public ExecutionStatusEnum statusFilter;
    public ListExecutionsInput withStatusFilter(ExecutionStatusEnum statusFilter) {
        this.statusFilter = statusFilter;
        return this;
    }
}