package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EnhancedMetrics
 * Represents enhanced metrics types.
**/
public class EnhancedMetrics {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ShardLevelMetrics")
    public MetricsNameEnum[] shardLevelMetrics;
    public EnhancedMetrics withShardLevelMetrics(MetricsNameEnum[] shardLevelMetrics) {
        this.shardLevelMetrics = shardLevelMetrics;
        return this;
    }
}