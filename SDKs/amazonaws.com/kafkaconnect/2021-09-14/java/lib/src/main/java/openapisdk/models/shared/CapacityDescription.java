package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CapacityDescription
 * A description of the connector's capacity.
**/
public class CapacityDescription {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("autoScaling")
    public AutoScalingDescription autoScaling;
    public CapacityDescription withAutoScaling(AutoScalingDescription autoScaling) {
        this.autoScaling = autoScaling;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("provisionedCapacity")
    public ProvisionedCapacityDescription provisionedCapacity;
    public CapacityDescription withProvisionedCapacity(ProvisionedCapacityDescription provisionedCapacity) {
        this.provisionedCapacity = provisionedCapacity;
        return this;
    }
}