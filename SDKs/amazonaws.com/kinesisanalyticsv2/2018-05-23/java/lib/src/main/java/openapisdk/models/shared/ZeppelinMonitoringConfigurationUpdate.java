package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ZeppelinMonitoringConfigurationUpdate
 * Updates to the monitoring configuration for Apache Zeppelin within a Kinesis Data Analytics Studio notebook.
**/
public class ZeppelinMonitoringConfigurationUpdate {
    @JsonProperty("LogLevelUpdate")
    public LogLevelEnum logLevelUpdate;
    public ZeppelinMonitoringConfigurationUpdate withLogLevelUpdate(LogLevelEnum logLevelUpdate) {
        this.logLevelUpdate = logLevelUpdate;
        return this;
    }
}