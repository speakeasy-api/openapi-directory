package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class InvokeDeviceMethodRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deviceMethod")
    public InvokeDeviceMethodRequestBodyDeviceMethod deviceMethod;
    public InvokeDeviceMethodRequestBody withDeviceMethod(InvokeDeviceMethodRequestBodyDeviceMethod deviceMethod) {
        this.deviceMethod = deviceMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deviceMethodParameters")
    public String deviceMethodParameters;
    public InvokeDeviceMethodRequestBody withDeviceMethodParameters(String deviceMethodParameters) {
        this.deviceMethodParameters = deviceMethodParameters;
        return this;
    }
}