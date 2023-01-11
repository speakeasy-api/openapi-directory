package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetDeviceRegistrationRequestBody {
    @JsonProperty("DeviceFleetName")
    public String deviceFleetName;
    public GetDeviceRegistrationRequestBody withDeviceFleetName(String deviceFleetName) {
        this.deviceFleetName = deviceFleetName;
        return this;
    }
    @JsonProperty("DeviceName")
    public String deviceName;
    public GetDeviceRegistrationRequestBody withDeviceName(String deviceName) {
        this.deviceName = deviceName;
        return this;
    }
}