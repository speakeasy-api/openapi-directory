package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * BatchDeleteDevicePositionHistoryError
 * Contains the tracker resource details.
**/
public class BatchDeleteDevicePositionHistoryError {
    @JsonProperty("DeviceId")
    public String deviceId;
    public BatchDeleteDevicePositionHistoryError withDeviceId(String deviceId) {
        this.deviceId = deviceId;
        return this;
    }
    @JsonProperty("Error")
    public BatchItemError error;
    public BatchDeleteDevicePositionHistoryError withError(BatchItemError error) {
        this.error = error;
        return this;
    }
}