package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class StopPhiDetectionJobResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("JobId")
    public String jobId;
    public StopPhiDetectionJobResponse withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
}