package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateCustomRoutingAcceleratorAttributesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AcceleratorAttributes")
    public CustomRoutingAcceleratorAttributes acceleratorAttributes;
    public UpdateCustomRoutingAcceleratorAttributesResponse withAcceleratorAttributes(CustomRoutingAcceleratorAttributes acceleratorAttributes) {
        this.acceleratorAttributes = acceleratorAttributes;
        return this;
    }
}