package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetDevicePoolCompatibilityResult
 * Represents the result of describe device pool compatibility request.
**/
public class GetDevicePoolCompatibilityResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("compatibleDevices")
    public DevicePoolCompatibilityResult[] compatibleDevices;
    public GetDevicePoolCompatibilityResult withCompatibleDevices(DevicePoolCompatibilityResult[] compatibleDevices) {
        this.compatibleDevices = compatibleDevices;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("incompatibleDevices")
    public DevicePoolCompatibilityResult[] incompatibleDevices;
    public GetDevicePoolCompatibilityResult withIncompatibleDevices(DevicePoolCompatibilityResult[] incompatibleDevices) {
        this.incompatibleDevices = incompatibleDevices;
        return this;
    }
}