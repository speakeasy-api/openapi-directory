package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeregisterRobotResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fleet")
    public String fleet;
    public DeregisterRobotResponse withFleet(String fleet) {
        this.fleet = fleet;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("robot")
    public String robot;
    public DeregisterRobotResponse withRobot(String robot) {
        this.robot = robot;
        return this;
    }
}