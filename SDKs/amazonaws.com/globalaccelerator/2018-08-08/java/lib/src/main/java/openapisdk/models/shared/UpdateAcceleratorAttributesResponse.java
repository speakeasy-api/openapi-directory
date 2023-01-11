package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateAcceleratorAttributesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AcceleratorAttributes")
    public AcceleratorAttributes acceleratorAttributes;
    public UpdateAcceleratorAttributesResponse withAcceleratorAttributes(AcceleratorAttributes acceleratorAttributes) {
        this.acceleratorAttributes = acceleratorAttributes;
        return this;
    }
}