package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CancelQuantumTaskResponse {
    @JsonProperty("cancellationStatus")
    public CancellationStatusEnum cancellationStatus;
    public CancelQuantumTaskResponse withCancellationStatus(CancellationStatusEnum cancellationStatus) {
        this.cancellationStatus = cancellationStatus;
        return this;
    }
    @JsonProperty("quantumTaskArn")
    public String quantumTaskArn;
    public CancelQuantumTaskResponse withQuantumTaskArn(String quantumTaskArn) {
        this.quantumTaskArn = quantumTaskArn;
        return this;
    }
}