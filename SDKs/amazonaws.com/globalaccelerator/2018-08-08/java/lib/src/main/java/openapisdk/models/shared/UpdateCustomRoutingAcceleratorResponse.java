package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateCustomRoutingAcceleratorResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Accelerator")
    public CustomRoutingAccelerator accelerator;
    public UpdateCustomRoutingAcceleratorResponse withAccelerator(CustomRoutingAccelerator accelerator) {
        this.accelerator = accelerator;
        return this;
    }
}