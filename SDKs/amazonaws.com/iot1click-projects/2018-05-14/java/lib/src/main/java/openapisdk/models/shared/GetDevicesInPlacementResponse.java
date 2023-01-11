package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetDevicesInPlacementResponse {
    @JsonProperty("devices")
    public java.util.Map<String, String> devices;
    public GetDevicesInPlacementResponse withDevices(java.util.Map<String, String> devices) {
        this.devices = devices;
        return this;
    }
}