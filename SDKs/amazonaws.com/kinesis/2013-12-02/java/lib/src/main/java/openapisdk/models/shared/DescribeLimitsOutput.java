package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeLimitsOutput {
    @JsonProperty("OpenShardCount")
    public Long openShardCount;
    public DescribeLimitsOutput withOpenShardCount(Long openShardCount) {
        this.openShardCount = openShardCount;
        return this;
    }
    @JsonProperty("ShardLimit")
    public Long shardLimit;
    public DescribeLimitsOutput withShardLimit(Long shardLimit) {
        this.shardLimit = shardLimit;
        return this;
    }
}