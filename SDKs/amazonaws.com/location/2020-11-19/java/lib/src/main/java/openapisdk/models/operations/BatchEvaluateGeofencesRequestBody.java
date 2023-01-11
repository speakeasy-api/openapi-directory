package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class BatchEvaluateGeofencesRequestBody {
    @JsonProperty("DevicePositionUpdates")
    public openapisdk.models.shared.DevicePositionUpdate[] devicePositionUpdates;
    public BatchEvaluateGeofencesRequestBody withDevicePositionUpdates(openapisdk.models.shared.DevicePositionUpdate[] devicePositionUpdates) {
        this.devicePositionUpdates = devicePositionUpdates;
        return this;
    }
}