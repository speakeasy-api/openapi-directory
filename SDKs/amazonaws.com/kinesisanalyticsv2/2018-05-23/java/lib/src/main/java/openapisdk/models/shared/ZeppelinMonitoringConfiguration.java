package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ZeppelinMonitoringConfiguration
 * Describes configuration parameters for Amazon CloudWatch logging for a Kinesis Data Analytics Studio notebook. For more information about CloudWatch logging, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/java/monitoring-overview.html">Monitoring</a>.
**/
public class ZeppelinMonitoringConfiguration {
    @JsonProperty("LogLevel")
    public LogLevelEnum logLevel;
    public ZeppelinMonitoringConfiguration withLogLevel(LogLevelEnum logLevel) {
        this.logLevel = logLevel;
        return this;
    }
}