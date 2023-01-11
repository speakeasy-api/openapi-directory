package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * GetShardIteratorInput
 * Represents the input for <code>GetShardIterator</code>.
**/
public class GetShardIteratorInput {
    @JsonProperty("ShardId")
    public String shardId;
    public GetShardIteratorInput withShardId(String shardId) {
        this.shardId = shardId;
        return this;
    }
    @JsonProperty("ShardIteratorType")
    public ShardIteratorTypeEnum shardIteratorType;
    public GetShardIteratorInput withShardIteratorType(ShardIteratorTypeEnum shardIteratorType) {
        this.shardIteratorType = shardIteratorType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StartingSequenceNumber")
    public String startingSequenceNumber;
    public GetShardIteratorInput withStartingSequenceNumber(String startingSequenceNumber) {
        this.startingSequenceNumber = startingSequenceNumber;
        return this;
    }
    @JsonProperty("StreamName")
    public String streamName;
    public GetShardIteratorInput withStreamName(String streamName) {
        this.streamName = streamName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("Timestamp")
    public OffsetDateTime timestamp;
    public GetShardIteratorInput withTimestamp(OffsetDateTime timestamp) {
        this.timestamp = timestamp;
        return this;
    }
}