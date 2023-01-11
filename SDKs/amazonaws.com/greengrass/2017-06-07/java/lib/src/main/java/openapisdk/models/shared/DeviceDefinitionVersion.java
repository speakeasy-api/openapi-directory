package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DeviceDefinitionVersion
 * Information about a device definition version.
**/
public class DeviceDefinitionVersion {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Devices")
    public Device[] devices;
    public DeviceDefinitionVersion withDevices(Device[] devices) {
        this.devices = devices;
        return this;
    }
}