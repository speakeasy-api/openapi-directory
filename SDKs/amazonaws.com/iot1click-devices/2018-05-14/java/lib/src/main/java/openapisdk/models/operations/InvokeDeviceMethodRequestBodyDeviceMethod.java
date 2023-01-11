package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InvokeDeviceMethodRequestBodyDeviceMethod
 * The device method to invoke.
**/
public class InvokeDeviceMethodRequestBodyDeviceMethod {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DeviceType")
    public java.util.Map<String, Object> deviceType;
    public InvokeDeviceMethodRequestBodyDeviceMethod withDeviceType(java.util.Map<String, Object> deviceType) {
        this.deviceType = deviceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MethodName")
    public java.util.Map<String, Object> methodName;
    public InvokeDeviceMethodRequestBodyDeviceMethod withMethodName(java.util.Map<String, Object> methodName) {
        this.methodName = methodName;
        return this;
    }
}