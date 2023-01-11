package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ScaleOutPolicyDescription
 * The description of the scale-out policy for the connector.
**/
public class ScaleOutPolicyDescription {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cpuUtilizationPercentage")
    public Long cpuUtilizationPercentage;
    public ScaleOutPolicyDescription withCpuUtilizationPercentage(Long cpuUtilizationPercentage) {
        this.cpuUtilizationPercentage = cpuUtilizationPercentage;
        return this;
    }
}