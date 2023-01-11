package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SimulationSoftwareSuite
 * Information about a simulation software suite.
**/
public class SimulationSoftwareSuite {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public SimulationSoftwareSuiteTypeEnum name;
    public SimulationSoftwareSuite withName(SimulationSoftwareSuiteTypeEnum name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public String version;
    public SimulationSoftwareSuite withVersion(String version) {
        this.version = version;
        return this;
    }
}