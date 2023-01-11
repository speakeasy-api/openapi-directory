package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RuntimeConfiguration
 * <p>A collection of server process configurations that describe the set of processes to run on each instance in a fleet. Server processes run either an executable in a custom game build or a Realtime Servers script. GameLift launches the configured processes, manages their life cycle, and replaces them as needed. Each instance checks regularly for an updated runtime configuration. </p> <p>A GameLift instance is limited to 50 processes running concurrently. To calculate the total number of processes in a runtime configuration, add the values of the <code>ConcurrentExecutions</code> parameter for each <a>ServerProcess</a>. Learn more about <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-multiprocess.html"> Running Multiple Processes on a Fleet</a>.</p> <p> <b>Related actions</b> </p> <p> <a>DescribeRuntimeConfiguration</a> | <a>UpdateRuntimeConfiguration</a> </p>
**/
public class RuntimeConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GameSessionActivationTimeoutSeconds")
    public Long gameSessionActivationTimeoutSeconds;
    public RuntimeConfiguration withGameSessionActivationTimeoutSeconds(Long gameSessionActivationTimeoutSeconds) {
        this.gameSessionActivationTimeoutSeconds = gameSessionActivationTimeoutSeconds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxConcurrentGameSessionActivations")
    public Long maxConcurrentGameSessionActivations;
    public RuntimeConfiguration withMaxConcurrentGameSessionActivations(Long maxConcurrentGameSessionActivations) {
        this.maxConcurrentGameSessionActivations = maxConcurrentGameSessionActivations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ServerProcesses")
    public ServerProcess[] serverProcesses;
    public RuntimeConfiguration withServerProcesses(ServerProcess[] serverProcesses) {
        this.serverProcesses = serverProcesses;
        return this;
    }
}