package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateWorkloadShareOutput
 * Input for Create Workload Share
**/
public class CreateWorkloadShareOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ShareId")
    public String shareId;
    public CreateWorkloadShareOutput withShareId(String shareId) {
        this.shareId = shareId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("WorkloadId")
    public String workloadId;
    public CreateWorkloadShareOutput withWorkloadId(String workloadId) {
        this.workloadId = workloadId;
        return this;
    }
}