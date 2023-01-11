package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ScaleOutPolicy
 * The scale-out policy for the connector.
**/
public class ScaleOutPolicy {
    @JsonProperty("cpuUtilizationPercentage")
    public Long cpuUtilizationPercentage;
    public ScaleOutPolicy withCpuUtilizationPercentage(Long cpuUtilizationPercentage) {
        this.cpuUtilizationPercentage = cpuUtilizationPercentage;
        return this;
    }
}