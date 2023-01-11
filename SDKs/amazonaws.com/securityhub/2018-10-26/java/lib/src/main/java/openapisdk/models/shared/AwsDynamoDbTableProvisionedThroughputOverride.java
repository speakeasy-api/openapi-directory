package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsDynamoDbTableProvisionedThroughputOverride
 * Replica-specific configuration for the provisioned throughput.
**/
public class AwsDynamoDbTableProvisionedThroughputOverride {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReadCapacityUnits")
    public Long readCapacityUnits;
    public AwsDynamoDbTableProvisionedThroughputOverride withReadCapacityUnits(Long readCapacityUnits) {
        this.readCapacityUnits = readCapacityUnits;
        return this;
    }
}