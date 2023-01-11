package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class BatchUpdateDevicePositionResponse {
    @JsonProperty("Errors")
    public BatchUpdateDevicePositionError[] errors;
    public BatchUpdateDevicePositionResponse withErrors(BatchUpdateDevicePositionError[] errors) {
        this.errors = errors;
        return this;
    }
}