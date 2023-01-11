package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeDeviceResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DeviceDescription")
    public DescribeDeviceResponseDeviceDescription deviceDescription;
    public DescribeDeviceResponse withDeviceDescription(DescribeDeviceResponseDeviceDescription deviceDescription) {
        this.deviceDescription = deviceDescription;
        return this;
    }
}