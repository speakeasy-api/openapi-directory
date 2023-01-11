package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ChildShard {
    @JsonProperty("HashKeyRange")
    public HashKeyRange hashKeyRange;
    public ChildShard withHashKeyRange(HashKeyRange hashKeyRange) {
        this.hashKeyRange = hashKeyRange;
        return this;
    }
    @JsonProperty("ParentShards")
    public String[] parentShards;
    public ChildShard withParentShards(String[] parentShards) {
        this.parentShards = parentShards;
        return this;
    }
    @JsonProperty("ShardId")
    public String shardId;
    public ChildShard withShardId(String shardId) {
        this.shardId = shardId;
        return this;
    }
}