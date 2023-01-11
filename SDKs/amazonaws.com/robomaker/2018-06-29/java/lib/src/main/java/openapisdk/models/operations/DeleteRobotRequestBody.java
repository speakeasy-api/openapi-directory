package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteRobotRequestBody {
    @JsonProperty("robot")
    public String robot;
    public DeleteRobotRequestBody withRobot(String robot) {
        this.robot = robot;
        return this;
    }
}