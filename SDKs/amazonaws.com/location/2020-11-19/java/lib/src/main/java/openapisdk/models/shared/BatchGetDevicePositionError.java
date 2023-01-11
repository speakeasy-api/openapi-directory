package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * BatchGetDevicePositionError
 * Contains error details for each device that didn't return a position.
**/
public class BatchGetDevicePositionError {
    @JsonProperty("DeviceId")
    public String deviceId;
    public BatchGetDevicePositionError withDeviceId(String deviceId) {
        this.deviceId = deviceId;
        return this;
    }
    @JsonProperty("Error")
    public BatchItemError error;
    public BatchGetDevicePositionError withError(BatchItemError error) {
        this.error = error;
        return this;
    }
}