package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateWorkloadOutput
 * Output of an update workload call.
**/
public class UpdateWorkloadOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Workload")
    public Workload workload;
    public UpdateWorkloadOutput withWorkload(Workload workload) {
        this.workload = workload;
        return this;
    }
}