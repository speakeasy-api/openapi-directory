package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * SplitShardInput
 * Represents the input for <code>SplitShard</code>.
**/
public class SplitShardInput {
    @JsonProperty("NewStartingHashKey")
    public String newStartingHashKey;
    public SplitShardInput withNewStartingHashKey(String newStartingHashKey) {
        this.newStartingHashKey = newStartingHashKey;
        return this;
    }
    @JsonProperty("ShardToSplit")
    public String shardToSplit;
    public SplitShardInput withShardToSplit(String shardToSplit) {
        this.shardToSplit = shardToSplit;
        return this;
    }
    @JsonProperty("StreamName")
    public String streamName;
    public SplitShardInput withStreamName(String streamName) {
        this.streamName = streamName;
        return this;
    }
}