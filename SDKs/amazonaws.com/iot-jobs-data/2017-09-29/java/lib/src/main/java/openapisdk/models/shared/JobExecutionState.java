package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * JobExecutionState
 * Contains data about the state of a job execution.
**/
public class JobExecutionState {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public JobExecutionStatusEnum status;
    public JobExecutionState withStatus(JobExecutionStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("statusDetails")
    public java.util.Map<String, String> statusDetails;
    public JobExecutionState withStatusDetails(java.util.Map<String, String> statusDetails) {
        this.statusDetails = statusDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("versionNumber")
    public Long versionNumber;
    public JobExecutionState withVersionNumber(Long versionNumber) {
        this.versionNumber = versionNumber;
        return this;
    }
}