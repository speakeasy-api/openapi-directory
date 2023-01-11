package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ShardConfiguration
 * Shard configuration options. Each shard configuration has the following: Slots and ReplicaCount.
**/
public class ShardConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReplicaCount")
    public Long replicaCount;
    public ShardConfiguration withReplicaCount(Long replicaCount) {
        this.replicaCount = replicaCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Slots")
    public String slots;
    public ShardConfiguration withSlots(String slots) {
        this.slots = slots;
        return this;
    }
}