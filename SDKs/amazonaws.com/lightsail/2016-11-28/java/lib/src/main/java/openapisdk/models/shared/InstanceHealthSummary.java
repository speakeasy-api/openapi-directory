package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InstanceHealthSummary
 * Describes information about the health of the instance.
**/
public class InstanceHealthSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instanceHealth")
    public InstanceHealthStateEnum instanceHealth;
    public InstanceHealthSummary withInstanceHealth(InstanceHealthStateEnum instanceHealth) {
        this.instanceHealth = instanceHealth;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instanceHealthReason")
    public InstanceHealthReasonEnum instanceHealthReason;
    public InstanceHealthSummary withInstanceHealthReason(InstanceHealthReasonEnum instanceHealthReason) {
        this.instanceHealthReason = instanceHealthReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instanceName")
    public String instanceName;
    public InstanceHealthSummary withInstanceName(String instanceName) {
        this.instanceName = instanceName;
        return this;
    }
}