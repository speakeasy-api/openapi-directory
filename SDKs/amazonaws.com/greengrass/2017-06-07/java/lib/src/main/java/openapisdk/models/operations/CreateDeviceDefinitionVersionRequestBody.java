package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateDeviceDefinitionVersionRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Devices")
    public openapisdk.models.shared.Device[] devices;
    public CreateDeviceDefinitionVersionRequestBody withDevices(openapisdk.models.shared.Device[] devices) {
        this.devices = devices;
        return this;
    }
}