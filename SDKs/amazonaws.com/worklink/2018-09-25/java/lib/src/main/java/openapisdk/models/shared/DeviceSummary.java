package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DeviceSummary
 * The summary of devices.
**/
public class DeviceSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DeviceId")
    public String deviceId;
    public DeviceSummary withDeviceId(String deviceId) {
        this.deviceId = deviceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DeviceStatus")
    public DeviceStatusEnum deviceStatus;
    public DeviceSummary withDeviceStatus(DeviceStatusEnum deviceStatus) {
        this.deviceStatus = deviceStatus;
        return this;
    }
}