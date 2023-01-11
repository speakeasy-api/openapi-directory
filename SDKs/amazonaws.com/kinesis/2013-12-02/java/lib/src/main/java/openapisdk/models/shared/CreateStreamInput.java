package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CreateStreamInput
 * Represents the input for <code>CreateStream</code>.
**/
public class CreateStreamInput {
    @JsonProperty("ShardCount")
    public Long shardCount;
    public CreateStreamInput withShardCount(Long shardCount) {
        this.shardCount = shardCount;
        return this;
    }
    @JsonProperty("StreamName")
    public String streamName;
    public CreateStreamInput withStreamName(String streamName) {
        this.streamName = streamName;
        return this;
    }
}