package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ServerProcess
 * A set of instructions for launching server processes on each instance in a fleet. Server processes run either an executable in a custom game build or a Realtime Servers script. Server process configurations are part of a fleet's <a>RuntimeConfiguration</a>.
**/
public class ServerProcess {
    @JsonProperty("ConcurrentExecutions")
    public Long concurrentExecutions;
    public ServerProcess withConcurrentExecutions(Long concurrentExecutions) {
        this.concurrentExecutions = concurrentExecutions;
        return this;
    }
    @JsonProperty("LaunchPath")
    public String launchPath;
    public ServerProcess withLaunchPath(String launchPath) {
        this.launchPath = launchPath;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Parameters")
    public String parameters;
    public ServerProcess withParameters(String parameters) {
        this.parameters = parameters;
        return this;
    }
}