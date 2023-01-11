package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateSimulationApplicationRequestBodySimulationSoftwareSuite
 * Information about a simulation software suite.
**/
public class UpdateSimulationApplicationRequestBodySimulationSoftwareSuite {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public openapisdk.models.shared.SimulationSoftwareSuiteTypeEnum name;
    public UpdateSimulationApplicationRequestBodySimulationSoftwareSuite withName(openapisdk.models.shared.SimulationSoftwareSuiteTypeEnum name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public String version;
    public UpdateSimulationApplicationRequestBodySimulationSoftwareSuite withVersion(String version) {
        this.version = version;
        return this;
    }
}