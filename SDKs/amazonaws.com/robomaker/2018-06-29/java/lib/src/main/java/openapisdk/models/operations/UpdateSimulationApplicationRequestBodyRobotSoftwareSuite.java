package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateSimulationApplicationRequestBodyRobotSoftwareSuite
 * Information about a robot software suite (ROS distribution).
**/
public class UpdateSimulationApplicationRequestBodyRobotSoftwareSuite {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public openapisdk.models.shared.RobotSoftwareSuiteTypeEnum name;
    public UpdateSimulationApplicationRequestBodyRobotSoftwareSuite withName(openapisdk.models.shared.RobotSoftwareSuiteTypeEnum name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public openapisdk.models.shared.RobotSoftwareSuiteVersionTypeEnum version;
    public UpdateSimulationApplicationRequestBodyRobotSoftwareSuite withVersion(openapisdk.models.shared.RobotSoftwareSuiteVersionTypeEnum version) {
        this.version = version;
        return this;
    }
}