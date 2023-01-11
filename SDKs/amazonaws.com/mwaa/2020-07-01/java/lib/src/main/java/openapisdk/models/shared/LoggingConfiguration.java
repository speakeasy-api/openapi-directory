package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LoggingConfiguration
 * Defines the Apache Airflow logs to send to CloudWatch Logs: <code>DagProcessingLogs</code>, <code>SchedulerLogs</code>, <code>TaskLogs</code>, <code>WebserverLogs</code>, <code>WorkerLogs</code>.
**/
public class LoggingConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DagProcessingLogs")
    public ModuleLoggingConfiguration dagProcessingLogs;
    public LoggingConfiguration withDagProcessingLogs(ModuleLoggingConfiguration dagProcessingLogs) {
        this.dagProcessingLogs = dagProcessingLogs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SchedulerLogs")
    public ModuleLoggingConfiguration schedulerLogs;
    public LoggingConfiguration withSchedulerLogs(ModuleLoggingConfiguration schedulerLogs) {
        this.schedulerLogs = schedulerLogs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TaskLogs")
    public ModuleLoggingConfiguration taskLogs;
    public LoggingConfiguration withTaskLogs(ModuleLoggingConfiguration taskLogs) {
        this.taskLogs = taskLogs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("WebserverLogs")
    public ModuleLoggingConfiguration webserverLogs;
    public LoggingConfiguration withWebserverLogs(ModuleLoggingConfiguration webserverLogs) {
        this.webserverLogs = webserverLogs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("WorkerLogs")
    public ModuleLoggingConfiguration workerLogs;
    public LoggingConfiguration withWorkerLogs(ModuleLoggingConfiguration workerLogs) {
        this.workerLogs = workerLogs;
        return this;
    }
}