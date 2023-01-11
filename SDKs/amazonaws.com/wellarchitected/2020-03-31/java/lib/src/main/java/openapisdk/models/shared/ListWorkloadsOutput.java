package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListWorkloadsOutput
 * Output of a list workloads call.
**/
public class ListWorkloadsOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListWorkloadsOutput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("WorkloadSummaries")
    public WorkloadSummary[] workloadSummaries;
    public ListWorkloadsOutput withWorkloadSummaries(WorkloadSummary[] workloadSummaries) {
        this.workloadSummaries = workloadSummaries;
        return this;
    }
}