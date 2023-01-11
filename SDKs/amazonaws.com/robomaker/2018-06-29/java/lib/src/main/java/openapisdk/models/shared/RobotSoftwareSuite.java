package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RobotSoftwareSuite
 * Information about a robot software suite (ROS distribution).
**/
public class RobotSoftwareSuite {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public RobotSoftwareSuiteTypeEnum name;
    public RobotSoftwareSuite withName(RobotSoftwareSuiteTypeEnum name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public RobotSoftwareSuiteVersionTypeEnum version;
    public RobotSoftwareSuite withVersion(RobotSoftwareSuiteVersionTypeEnum version) {
        this.version = version;
        return this;
    }
}