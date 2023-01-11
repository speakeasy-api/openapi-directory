package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class BatchGetDevicePositionResponse {
    @JsonProperty("DevicePositions")
    public DevicePosition[] devicePositions;
    public BatchGetDevicePositionResponse withDevicePositions(DevicePosition[] devicePositions) {
        this.devicePositions = devicePositions;
        return this;
    }
    @JsonProperty("Errors")
    public BatchGetDevicePositionError[] errors;
    public BatchGetDevicePositionResponse withErrors(BatchGetDevicePositionError[] errors) {
        this.errors = errors;
        return this;
    }
}