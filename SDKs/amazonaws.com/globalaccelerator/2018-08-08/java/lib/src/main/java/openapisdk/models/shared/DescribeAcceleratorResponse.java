package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeAcceleratorResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Accelerator")
    public Accelerator accelerator;
    public DescribeAcceleratorResponse withAccelerator(Accelerator accelerator) {
        this.accelerator = accelerator;
        return this;
    }
}