package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class BatchUpdateDevicePositionRequestBody {
    @JsonProperty("Updates")
    public openapisdk.models.shared.DevicePositionUpdate[] updates;
    public BatchUpdateDevicePositionRequestBody withUpdates(openapisdk.models.shared.DevicePositionUpdate[] updates) {
        this.updates = updates;
        return this;
    }
}