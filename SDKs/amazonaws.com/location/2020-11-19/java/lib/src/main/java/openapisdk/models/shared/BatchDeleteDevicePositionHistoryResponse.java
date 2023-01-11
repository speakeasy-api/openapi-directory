package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class BatchDeleteDevicePositionHistoryResponse {
    @JsonProperty("Errors")
    public BatchDeleteDevicePositionHistoryError[] errors;
    public BatchDeleteDevicePositionHistoryResponse withErrors(BatchDeleteDevicePositionHistoryError[] errors) {
        this.errors = errors;
        return this;
    }
}