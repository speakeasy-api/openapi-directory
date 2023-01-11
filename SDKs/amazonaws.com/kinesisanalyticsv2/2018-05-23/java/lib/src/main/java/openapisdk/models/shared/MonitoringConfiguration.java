package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MonitoringConfiguration
 * Describes configuration parameters for Amazon CloudWatch logging for an application. For more information about CloudWatch logging, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/java/monitoring-overview.html">Monitoring</a>.
**/
public class MonitoringConfiguration {
    @JsonProperty("ConfigurationType")
    public ConfigurationTypeEnum configurationType;
    public MonitoringConfiguration withConfigurationType(ConfigurationTypeEnum configurationType) {
        this.configurationType = configurationType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LogLevel")
    public LogLevelEnum logLevel;
    public MonitoringConfiguration withLogLevel(LogLevelEnum logLevel) {
        this.logLevel = logLevel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MetricsLevel")
    public MetricsLevelEnum metricsLevel;
    public MonitoringConfiguration withMetricsLevel(MetricsLevelEnum metricsLevel) {
        this.metricsLevel = metricsLevel;
        return this;
    }
}