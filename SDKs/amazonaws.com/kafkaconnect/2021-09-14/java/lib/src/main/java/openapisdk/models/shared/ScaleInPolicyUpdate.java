package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ScaleInPolicyUpdate
 * An update to the connector's scale-in policy.
**/
public class ScaleInPolicyUpdate {
    @JsonProperty("cpuUtilizationPercentage")
    public Long cpuUtilizationPercentage;
    public ScaleInPolicyUpdate withCpuUtilizationPercentage(Long cpuUtilizationPercentage) {
        this.cpuUtilizationPercentage = cpuUtilizationPercentage;
        return this;
    }
}