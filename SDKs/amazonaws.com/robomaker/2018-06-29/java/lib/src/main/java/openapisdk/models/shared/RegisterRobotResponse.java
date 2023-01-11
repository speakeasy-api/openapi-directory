package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RegisterRobotResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fleet")
    public String fleet;
    public RegisterRobotResponse withFleet(String fleet) {
        this.fleet = fleet;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("robot")
    public String robot;
    public RegisterRobotResponse withRobot(String robot) {
        this.robot = robot;
        return this;
    }
}