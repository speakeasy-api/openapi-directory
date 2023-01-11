package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ProvisionedCapacity
 * Details about a connector's provisioned capacity.
**/
public class ProvisionedCapacity {
    @JsonProperty("mcuCount")
    public Long mcuCount;
    public ProvisionedCapacity withMcuCount(Long mcuCount) {
        this.mcuCount = mcuCount;
        return this;
    }
    @JsonProperty("workerCount")
    public Long workerCount;
    public ProvisionedCapacity withWorkerCount(Long workerCount) {
        this.workerCount = workerCount;
        return this;
    }
}