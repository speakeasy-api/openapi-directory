package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeregisterRobotRequestBody {
    @JsonProperty("fleet")
    public String fleet;
    public DeregisterRobotRequestBody withFleet(String fleet) {
        this.fleet = fleet;
        return this;
    }
    @JsonProperty("robot")
    public String robot;
    public DeregisterRobotRequestBody withRobot(String robot) {
        this.robot = robot;
        return this;
    }
}