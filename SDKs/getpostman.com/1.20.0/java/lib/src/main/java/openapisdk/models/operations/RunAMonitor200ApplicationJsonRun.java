package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RunAMonitor200ApplicationJsonRun {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("executions")
    public RunAMonitor200ApplicationJsonRunExecutions[] executions;
    public RunAMonitor200ApplicationJsonRun withExecutions(RunAMonitor200ApplicationJsonRunExecutions[] executions) {
        this.executions = executions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("failures")
    public RunAMonitor200ApplicationJsonRunFailures[] failures;
    public RunAMonitor200ApplicationJsonRun withFailures(RunAMonitor200ApplicationJsonRunFailures[] failures) {
        this.failures = failures;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("info")
    public RunAMonitor200ApplicationJsonRunInfo info;
    public RunAMonitor200ApplicationJsonRun withInfo(RunAMonitor200ApplicationJsonRunInfo info) {
        this.info = info;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stats")
    public RunAMonitor200ApplicationJsonRunStats stats;
    public RunAMonitor200ApplicationJsonRun withStats(RunAMonitor200ApplicationJsonRunStats stats) {
        this.stats = stats;
        return this;
    }
}