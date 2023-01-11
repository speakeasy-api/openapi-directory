package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteWorkerBlockRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Reason")
    public String reason;
    public DeleteWorkerBlockRequest withReason(String reason) {
        this.reason = reason;
        return this;
    }
    @JsonProperty("WorkerId")
    public String workerId;
    public DeleteWorkerBlockRequest withWorkerId(String workerId) {
        this.workerId = workerId;
        return this;
    }
}