package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ModuleLoggingConfigurationInput
 * Defines the type of logs to send for the Apache Airflow log type (e.g. <code>DagProcessingLogs</code>). Valid values: <code>CloudWatchLogGroupArn</code>, <code>Enabled</code>, <code>LogLevel</code>.
**/
public class ModuleLoggingConfigurationInput {
    @JsonProperty("Enabled")
    public Boolean enabled;
    public ModuleLoggingConfigurationInput withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonProperty("LogLevel")
    public LoggingLevelEnum logLevel;
    public ModuleLoggingConfigurationInput withLogLevel(LoggingLevelEnum logLevel) {
        this.logLevel = logLevel;
        return this;
    }
}