package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ScaleInPolicy
 * The scale-in policy for the connector.
**/
public class ScaleInPolicy {
    @JsonProperty("cpuUtilizationPercentage")
    public Long cpuUtilizationPercentage;
    public ScaleInPolicy withCpuUtilizationPercentage(Long cpuUtilizationPercentage) {
        this.cpuUtilizationPercentage = cpuUtilizationPercentage;
        return this;
    }
}