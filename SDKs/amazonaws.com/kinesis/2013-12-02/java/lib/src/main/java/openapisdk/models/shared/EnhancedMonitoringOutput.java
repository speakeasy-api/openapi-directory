package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EnhancedMonitoringOutput
 * Represents the output for <a>EnableEnhancedMonitoring</a> and <a>DisableEnhancedMonitoring</a>.
**/
public class EnhancedMonitoringOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CurrentShardLevelMetrics")
    public MetricsNameEnum[] currentShardLevelMetrics;
    public EnhancedMonitoringOutput withCurrentShardLevelMetrics(MetricsNameEnum[] currentShardLevelMetrics) {
        this.currentShardLevelMetrics = currentShardLevelMetrics;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DesiredShardLevelMetrics")
    public MetricsNameEnum[] desiredShardLevelMetrics;
    public EnhancedMonitoringOutput withDesiredShardLevelMetrics(MetricsNameEnum[] desiredShardLevelMetrics) {
        this.desiredShardLevelMetrics = desiredShardLevelMetrics;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StreamName")
    public String streamName;
    public EnhancedMonitoringOutput withStreamName(String streamName) {
        this.streamName = streamName;
        return this;
    }
}