package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetWorkloadOutput
 * Output of a get workload call.
**/
public class GetWorkloadOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Workload")
    public Workload workload;
    public GetWorkloadOutput withWorkload(Workload workload) {
        this.workload = workload;
        return this;
    }
}