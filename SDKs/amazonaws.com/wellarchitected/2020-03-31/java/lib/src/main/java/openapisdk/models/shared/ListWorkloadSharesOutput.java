package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListWorkloadSharesOutput
 * Input for List Workload Share
**/
public class ListWorkloadSharesOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListWorkloadSharesOutput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("WorkloadId")
    public String workloadId;
    public ListWorkloadSharesOutput withWorkloadId(String workloadId) {
        this.workloadId = workloadId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("WorkloadShareSummaries")
    public WorkloadShareSummary[] workloadShareSummaries;
    public ListWorkloadSharesOutput withWorkloadShareSummaries(WorkloadShareSummary[] workloadShareSummaries) {
        this.workloadShareSummaries = workloadShareSummaries;
        return this;
    }
}