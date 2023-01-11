package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateSimulationApplicationRequestBodyRobotSoftwareSuite
 * Information about a robot software suite (ROS distribution).
**/
public class CreateSimulationApplicationRequestBodyRobotSoftwareSuite {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public openapisdk.models.shared.RobotSoftwareSuiteTypeEnum name;
    public CreateSimulationApplicationRequestBodyRobotSoftwareSuite withName(openapisdk.models.shared.RobotSoftwareSuiteTypeEnum name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public openapisdk.models.shared.RobotSoftwareSuiteVersionTypeEnum version;
    public CreateSimulationApplicationRequestBodyRobotSoftwareSuite withVersion(openapisdk.models.shared.RobotSoftwareSuiteVersionTypeEnum version) {
        this.version = version;
        return this;
    }
}