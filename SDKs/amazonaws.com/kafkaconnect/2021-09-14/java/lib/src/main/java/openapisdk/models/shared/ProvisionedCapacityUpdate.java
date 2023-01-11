package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ProvisionedCapacityUpdate
 * An update to a connector's fixed capacity.
**/
public class ProvisionedCapacityUpdate {
    @JsonProperty("mcuCount")
    public Long mcuCount;
    public ProvisionedCapacityUpdate withMcuCount(Long mcuCount) {
        this.mcuCount = mcuCount;
        return this;
    }
    @JsonProperty("workerCount")
    public Long workerCount;
    public ProvisionedCapacityUpdate withWorkerCount(Long workerCount) {
        this.workerCount = workerCount;
        return this;
    }
}