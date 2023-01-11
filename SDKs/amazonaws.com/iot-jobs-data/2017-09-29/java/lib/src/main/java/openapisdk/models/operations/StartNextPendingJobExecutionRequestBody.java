package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class StartNextPendingJobExecutionRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("statusDetails")
    public java.util.Map<String, String> statusDetails;
    public StartNextPendingJobExecutionRequestBody withStatusDetails(java.util.Map<String, String> statusDetails) {
        this.statusDetails = statusDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stepTimeoutInMinutes")
    public Long stepTimeoutInMinutes;
    public StartNextPendingJobExecutionRequestBody withStepTimeoutInMinutes(Long stepTimeoutInMinutes) {
        this.stepTimeoutInMinutes = stepTimeoutInMinutes;
        return this;
    }
}