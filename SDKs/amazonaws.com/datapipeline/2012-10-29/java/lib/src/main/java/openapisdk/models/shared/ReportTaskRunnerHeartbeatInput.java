package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReportTaskRunnerHeartbeatInput
 * Contains the parameters for ReportTaskRunnerHeartbeat.
**/
public class ReportTaskRunnerHeartbeatInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hostname")
    public String hostname;
    public ReportTaskRunnerHeartbeatInput withHostname(String hostname) {
        this.hostname = hostname;
        return this;
    }
    @JsonProperty("taskrunnerId")
    public String taskrunnerId;
    public ReportTaskRunnerHeartbeatInput withTaskrunnerId(String taskrunnerId) {
        this.taskrunnerId = taskrunnerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("workerGroup")
    public String workerGroup;
    public ReportTaskRunnerHeartbeatInput withWorkerGroup(String workerGroup) {
        this.workerGroup = workerGroup;
        return this;
    }
}