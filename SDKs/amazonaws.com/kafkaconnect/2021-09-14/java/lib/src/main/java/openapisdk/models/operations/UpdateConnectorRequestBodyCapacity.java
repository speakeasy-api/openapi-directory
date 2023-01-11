package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateConnectorRequestBodyCapacity
 * The target capacity for the connector. The capacity can be auto scaled or provisioned.
**/
public class UpdateConnectorRequestBodyCapacity {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("autoScaling")
    public openapisdk.models.shared.AutoScalingUpdate autoScaling;
    public UpdateConnectorRequestBodyCapacity withAutoScaling(openapisdk.models.shared.AutoScalingUpdate autoScaling) {
        this.autoScaling = autoScaling;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("provisionedCapacity")
    public openapisdk.models.shared.ProvisionedCapacityUpdate provisionedCapacity;
    public UpdateConnectorRequestBodyCapacity withProvisionedCapacity(openapisdk.models.shared.ProvisionedCapacityUpdate provisionedCapacity) {
        this.provisionedCapacity = provisionedCapacity;
        return this;
    }
}