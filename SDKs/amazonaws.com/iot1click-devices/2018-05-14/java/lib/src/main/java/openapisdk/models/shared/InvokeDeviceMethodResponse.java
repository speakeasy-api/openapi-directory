package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class InvokeDeviceMethodResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DeviceMethodResponse")
    public java.util.Map<String, Object> deviceMethodResponse;
    public InvokeDeviceMethodResponse withDeviceMethodResponse(java.util.Map<String, Object> deviceMethodResponse) {
        this.deviceMethodResponse = deviceMethodResponse;
        return this;
    }
}