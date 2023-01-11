package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeviceTemplate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("callbackOverrides")
    public java.util.Map<String, String> callbackOverrides;
    public DeviceTemplate withCallbackOverrides(java.util.Map<String, String> callbackOverrides) {
        this.callbackOverrides = callbackOverrides;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deviceType")
    public String deviceType;
    public DeviceTemplate withDeviceType(String deviceType) {
        this.deviceType = deviceType;
        return this;
    }
}