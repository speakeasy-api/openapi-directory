package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetDeviceMethodsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DeviceMethods")
    public java.util.Map<String, Object> deviceMethods;
    public GetDeviceMethodsResponse withDeviceMethods(java.util.Map<String, Object> deviceMethods) {
        this.deviceMethods = deviceMethods;
        return this;
    }
}