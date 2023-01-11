package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * MergeShardsInput
 * Represents the input for <code>MergeShards</code>.
**/
public class MergeShardsInput {
    @JsonProperty("AdjacentShardToMerge")
    public String adjacentShardToMerge;
    public MergeShardsInput withAdjacentShardToMerge(String adjacentShardToMerge) {
        this.adjacentShardToMerge = adjacentShardToMerge;
        return this;
    }
    @JsonProperty("ShardToMerge")
    public String shardToMerge;
    public MergeShardsInput withShardToMerge(String shardToMerge) {
        this.shardToMerge = shardToMerge;
        return this;
    }
    @JsonProperty("StreamName")
    public String streamName;
    public MergeShardsInput withStreamName(String streamName) {
        this.streamName = streamName;
        return this;
    }
}