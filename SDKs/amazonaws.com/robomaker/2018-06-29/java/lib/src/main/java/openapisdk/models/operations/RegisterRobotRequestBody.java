package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RegisterRobotRequestBody {
    @JsonProperty("fleet")
    public String fleet;
    public RegisterRobotRequestBody withFleet(String fleet) {
        this.fleet = fleet;
        return this;
    }
    @JsonProperty("robot")
    public String robot;
    public RegisterRobotRequestBody withRobot(String robot) {
        this.robot = robot;
        return this;
    }
}