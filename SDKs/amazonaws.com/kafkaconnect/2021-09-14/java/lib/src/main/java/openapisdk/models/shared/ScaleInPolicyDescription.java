package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ScaleInPolicyDescription
 * The description of the scale-in policy for the connector.
**/
public class ScaleInPolicyDescription {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cpuUtilizationPercentage")
    public Long cpuUtilizationPercentage;
    public ScaleInPolicyDescription withCpuUtilizationPercentage(Long cpuUtilizationPercentage) {
        this.cpuUtilizationPercentage = cpuUtilizationPercentage;
        return this;
    }
}