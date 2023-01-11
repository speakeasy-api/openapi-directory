package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CancelJobExecutionRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expectedVersion")
    public Long expectedVersion;
    public CancelJobExecutionRequestBody withExpectedVersion(Long expectedVersion) {
        this.expectedVersion = expectedVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("statusDetails")
    public java.util.Map<String, String> statusDetails;
    public CancelJobExecutionRequestBody withStatusDetails(java.util.Map<String, String> statusDetails) {
        this.statusDetails = statusDetails;
        return this;
    }
}