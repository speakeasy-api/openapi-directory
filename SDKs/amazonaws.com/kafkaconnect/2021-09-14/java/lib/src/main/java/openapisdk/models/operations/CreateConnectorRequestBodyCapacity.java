package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateConnectorRequestBodyCapacity
 * Information about the capacity of the connector, whether it is auto scaled or provisioned.
**/
public class CreateConnectorRequestBodyCapacity {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("autoScaling")
    public openapisdk.models.shared.AutoScaling autoScaling;
    public CreateConnectorRequestBodyCapacity withAutoScaling(openapisdk.models.shared.AutoScaling autoScaling) {
        this.autoScaling = autoScaling;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("provisionedCapacity")
    public openapisdk.models.shared.ProvisionedCapacity provisionedCapacity;
    public CreateConnectorRequestBodyCapacity withProvisionedCapacity(openapisdk.models.shared.ProvisionedCapacity provisionedCapacity) {
        this.provisionedCapacity = provisionedCapacity;
        return this;
    }
}