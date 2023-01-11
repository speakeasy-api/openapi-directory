package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ShardConfigurationRequest
 * A request to configure the sharding properties of a cluster
**/
public class ShardConfigurationRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ShardCount")
    public Long shardCount;
    public ShardConfigurationRequest withShardCount(Long shardCount) {
        this.shardCount = shardCount;
        return this;
    }
}