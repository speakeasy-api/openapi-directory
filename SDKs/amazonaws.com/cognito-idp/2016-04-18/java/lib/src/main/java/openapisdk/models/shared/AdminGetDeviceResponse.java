package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * AdminGetDeviceResponse
 * Gets the device response, as an administrator.
**/
public class AdminGetDeviceResponse {
    @JsonProperty("Device")
    public DeviceType device;
    public AdminGetDeviceResponse withDevice(DeviceType device) {
        this.device = device;
        return this;
    }
}