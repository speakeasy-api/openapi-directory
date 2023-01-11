package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Shard
 * A uniquely identified group of data records in a Kinesis data stream.
**/
public class Shard {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AdjacentParentShardId")
    public String adjacentParentShardId;
    public Shard withAdjacentParentShardId(String adjacentParentShardId) {
        this.adjacentParentShardId = adjacentParentShardId;
        return this;
    }
    @JsonProperty("HashKeyRange")
    public HashKeyRange hashKeyRange;
    public Shard withHashKeyRange(HashKeyRange hashKeyRange) {
        this.hashKeyRange = hashKeyRange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ParentShardId")
    public String parentShardId;
    public Shard withParentShardId(String parentShardId) {
        this.parentShardId = parentShardId;
        return this;
    }
    @JsonProperty("SequenceNumberRange")
    public SequenceNumberRange sequenceNumberRange;
    public Shard withSequenceNumberRange(SequenceNumberRange sequenceNumberRange) {
        this.sequenceNumberRange = sequenceNumberRange;
        return this;
    }
    @JsonProperty("ShardId")
    public String shardId;
    public Shard withShardId(String shardId) {
        this.shardId = shardId;
        return this;
    }
}