package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListMilestonesOutput
 * Output of a list milestones call.
**/
public class ListMilestonesOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MilestoneSummaries")
    public MilestoneSummary[] milestoneSummaries;
    public ListMilestonesOutput withMilestoneSummaries(MilestoneSummary[] milestoneSummaries) {
        this.milestoneSummaries = milestoneSummaries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListMilestonesOutput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("WorkloadId")
    public String workloadId;
    public ListMilestonesOutput withWorkloadId(String workloadId) {
        this.workloadId = workloadId;
        return this;
    }
}