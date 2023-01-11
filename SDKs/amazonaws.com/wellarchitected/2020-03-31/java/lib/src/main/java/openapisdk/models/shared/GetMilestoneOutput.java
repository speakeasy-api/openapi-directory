package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetMilestoneOutput
 * Output of a get milestone call.
**/
public class GetMilestoneOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Milestone")
    public Milestone milestone;
    public GetMilestoneOutput withMilestone(Milestone milestone) {
        this.milestone = milestone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("WorkloadId")
    public String workloadId;
    public GetMilestoneOutput withWorkloadId(String workloadId) {
        this.workloadId = workloadId;
        return this;
    }
}