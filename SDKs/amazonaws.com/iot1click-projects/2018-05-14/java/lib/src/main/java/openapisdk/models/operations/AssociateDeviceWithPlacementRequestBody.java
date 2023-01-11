package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AssociateDeviceWithPlacementRequestBody {
    @JsonProperty("deviceId")
    public String deviceId;
    public AssociateDeviceWithPlacementRequestBody withDeviceId(String deviceId) {
        this.deviceId = deviceId;
        return this;
    }
}