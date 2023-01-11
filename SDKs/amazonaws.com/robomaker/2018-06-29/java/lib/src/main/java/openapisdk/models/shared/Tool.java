package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Tool
 * Information about a tool. Tools are used in a simulation job.
**/
public class Tool {
    @JsonProperty("command")
    public String command;
    public Tool withCommand(String command) {
        this.command = command;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exitBehavior")
    public ExitBehaviorEnum exitBehavior;
    public Tool withExitBehavior(ExitBehaviorEnum exitBehavior) {
        this.exitBehavior = exitBehavior;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public Tool withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("streamOutputToCloudWatch")
    public Boolean streamOutputToCloudWatch;
    public Tool withStreamOutputToCloudWatch(Boolean streamOutputToCloudWatch) {
        this.streamOutputToCloudWatch = streamOutputToCloudWatch;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("streamUI")
    public Boolean streamUI;
    public Tool withStreamUi(Boolean streamUI) {
        this.streamUI = streamUI;
        return this;
    }
}