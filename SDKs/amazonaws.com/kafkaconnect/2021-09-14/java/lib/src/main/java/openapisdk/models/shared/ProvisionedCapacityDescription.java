package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ProvisionedCapacityDescription
 * The description of a connector's provisioned capacity.
**/
public class ProvisionedCapacityDescription {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mcuCount")
    public Long mcuCount;
    public ProvisionedCapacityDescription withMcuCount(Long mcuCount) {
        this.mcuCount = mcuCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("workerCount")
    public Long workerCount;
    public ProvisionedCapacityDescription withWorkerCount(Long workerCount) {
        this.workerCount = workerCount;
        return this;
    }
}