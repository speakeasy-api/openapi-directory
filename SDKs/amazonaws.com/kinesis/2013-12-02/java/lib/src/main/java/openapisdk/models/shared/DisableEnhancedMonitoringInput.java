package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DisableEnhancedMonitoringInput
 * Represents the input for <a>DisableEnhancedMonitoring</a>.
**/
public class DisableEnhancedMonitoringInput {
    @JsonProperty("ShardLevelMetrics")
    public MetricsNameEnum[] shardLevelMetrics;
    public DisableEnhancedMonitoringInput withShardLevelMetrics(MetricsNameEnum[] shardLevelMetrics) {
        this.shardLevelMetrics = shardLevelMetrics;
        return this;
    }
    @JsonProperty("StreamName")
    public String streamName;
    public DisableEnhancedMonitoringInput withStreamName(String streamName) {
        this.streamName = streamName;
        return this;
    }
}