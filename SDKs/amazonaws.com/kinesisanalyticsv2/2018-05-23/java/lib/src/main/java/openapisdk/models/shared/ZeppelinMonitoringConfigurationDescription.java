package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ZeppelinMonitoringConfigurationDescription
 * The monitoring configuration for Apache Zeppelin within a Kinesis Data Analytics Studio notebook.
**/
public class ZeppelinMonitoringConfigurationDescription {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LogLevel")
    public LogLevelEnum logLevel;
    public ZeppelinMonitoringConfigurationDescription withLogLevel(LogLevelEnum logLevel) {
        this.logLevel = logLevel;
        return this;
    }
}