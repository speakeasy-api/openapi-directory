package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MonitoringConfigurationDescription
 * Describes configuration parameters for CloudWatch logging for an application.
**/
public class MonitoringConfigurationDescription {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConfigurationType")
    public ConfigurationTypeEnum configurationType;
    public MonitoringConfigurationDescription withConfigurationType(ConfigurationTypeEnum configurationType) {
        this.configurationType = configurationType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LogLevel")
    public LogLevelEnum logLevel;
    public MonitoringConfigurationDescription withLogLevel(LogLevelEnum logLevel) {
        this.logLevel = logLevel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MetricsLevel")
    public MetricsLevelEnum metricsLevel;
    public MonitoringConfigurationDescription withMetricsLevel(MetricsLevelEnum metricsLevel) {
        this.metricsLevel = metricsLevel;
        return this;
    }
}