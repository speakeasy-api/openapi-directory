package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateWorkerBlockRequest {
    @JsonProperty("Reason")
    public String reason;
    public CreateWorkerBlockRequest withReason(String reason) {
        this.reason = reason;
        return this;
    }
    @JsonProperty("WorkerId")
    public String workerId;
    public CreateWorkerBlockRequest withWorkerId(String workerId) {
        this.workerId = workerId;
        return this;
    }
}