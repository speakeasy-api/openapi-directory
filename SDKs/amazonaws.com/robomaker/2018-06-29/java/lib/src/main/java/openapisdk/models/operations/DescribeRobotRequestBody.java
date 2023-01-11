package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeRobotRequestBody {
    @JsonProperty("robot")
    public String robot;
    public DescribeRobotRequestBody withRobot(String robot) {
        this.robot = robot;
        return this;
    }
}