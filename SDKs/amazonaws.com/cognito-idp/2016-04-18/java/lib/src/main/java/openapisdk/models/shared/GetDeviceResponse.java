package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetDeviceResponse
 * Gets the device response.
**/
public class GetDeviceResponse {
    @JsonProperty("Device")
    public DeviceType device;
    public GetDeviceResponse withDevice(DeviceType device) {
        this.device = device;
        return this;
    }
}