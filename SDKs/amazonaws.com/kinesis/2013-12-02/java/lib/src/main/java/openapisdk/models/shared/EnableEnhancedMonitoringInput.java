package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * EnableEnhancedMonitoringInput
 * Represents the input for <a>EnableEnhancedMonitoring</a>.
**/
public class EnableEnhancedMonitoringInput {
    @JsonProperty("ShardLevelMetrics")
    public MetricsNameEnum[] shardLevelMetrics;
    public EnableEnhancedMonitoringInput withShardLevelMetrics(MetricsNameEnum[] shardLevelMetrics) {
        this.shardLevelMetrics = shardLevelMetrics;
        return this;
    }
    @JsonProperty("StreamName")
    public String streamName;
    public EnableEnhancedMonitoringInput withStreamName(String streamName) {
        this.streamName = streamName;
        return this;
    }
}