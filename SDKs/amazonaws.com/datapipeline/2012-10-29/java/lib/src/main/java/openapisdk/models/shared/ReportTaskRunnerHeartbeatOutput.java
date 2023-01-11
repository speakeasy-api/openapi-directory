package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ReportTaskRunnerHeartbeatOutput
 * Contains the output of ReportTaskRunnerHeartbeat.
**/
public class ReportTaskRunnerHeartbeatOutput {
    @JsonProperty("terminate")
    public Boolean terminate;
    public ReportTaskRunnerHeartbeatOutput withTerminate(Boolean terminate) {
        this.terminate = terminate;
        return this;
    }
}