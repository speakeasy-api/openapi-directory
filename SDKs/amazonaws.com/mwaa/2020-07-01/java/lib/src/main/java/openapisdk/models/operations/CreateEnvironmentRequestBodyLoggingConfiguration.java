package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateEnvironmentRequestBodyLoggingConfiguration
 * Defines the Apache Airflow logs to send to CloudWatch Logs: <code>DagProcessingLogs</code>, <code>SchedulerLogs</code>, <code>TaskLogs</code>, <code>WebserverLogs</code>, <code>WorkerLogs</code>.
**/
public class CreateEnvironmentRequestBodyLoggingConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DagProcessingLogs")
    public openapisdk.models.shared.ModuleLoggingConfigurationInput dagProcessingLogs;
    public CreateEnvironmentRequestBodyLoggingConfiguration withDagProcessingLogs(openapisdk.models.shared.ModuleLoggingConfigurationInput dagProcessingLogs) {
        this.dagProcessingLogs = dagProcessingLogs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SchedulerLogs")
    public openapisdk.models.shared.ModuleLoggingConfigurationInput schedulerLogs;
    public CreateEnvironmentRequestBodyLoggingConfiguration withSchedulerLogs(openapisdk.models.shared.ModuleLoggingConfigurationInput schedulerLogs) {
        this.schedulerLogs = schedulerLogs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TaskLogs")
    public openapisdk.models.shared.ModuleLoggingConfigurationInput taskLogs;
    public CreateEnvironmentRequestBodyLoggingConfiguration withTaskLogs(openapisdk.models.shared.ModuleLoggingConfigurationInput taskLogs) {
        this.taskLogs = taskLogs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("WebserverLogs")
    public openapisdk.models.shared.ModuleLoggingConfigurationInput webserverLogs;
    public CreateEnvironmentRequestBodyLoggingConfiguration withWebserverLogs(openapisdk.models.shared.ModuleLoggingConfigurationInput webserverLogs) {
        this.webserverLogs = webserverLogs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("WorkerLogs")
    public openapisdk.models.shared.ModuleLoggingConfigurationInput workerLogs;
    public CreateEnvironmentRequestBodyLoggingConfiguration withWorkerLogs(openapisdk.models.shared.ModuleLoggingConfigurationInput workerLogs) {
        this.workerLogs = workerLogs;
        return this;
    }
}