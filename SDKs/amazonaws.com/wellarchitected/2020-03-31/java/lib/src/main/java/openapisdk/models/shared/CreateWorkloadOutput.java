package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateWorkloadOutput
 * Output of a create workload call.
**/
public class CreateWorkloadOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("WorkloadArn")
    public String workloadArn;
    public CreateWorkloadOutput withWorkloadArn(String workloadArn) {
        this.workloadArn = workloadArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("WorkloadId")
    public String workloadId;
    public CreateWorkloadOutput withWorkloadId(String workloadId) {
        this.workloadId = workloadId;
        return this;
    }
}