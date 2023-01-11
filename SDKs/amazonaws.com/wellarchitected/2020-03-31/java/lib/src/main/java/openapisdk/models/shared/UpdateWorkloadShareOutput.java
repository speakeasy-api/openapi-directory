package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateWorkloadShareOutput
 * Input for Update Workload Share
**/
public class UpdateWorkloadShareOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("WorkloadId")
    public String workloadId;
    public UpdateWorkloadShareOutput withWorkloadId(String workloadId) {
        this.workloadId = workloadId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("WorkloadShare")
    public WorkloadShare workloadShare;
    public UpdateWorkloadShareOutput withWorkloadShare(WorkloadShare workloadShare) {
        this.workloadShare = workloadShare;
        return this;
    }
}