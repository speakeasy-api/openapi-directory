package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DescribeStreamInput
 * Represents the input for <code>DescribeStream</code>.
**/
public class DescribeStreamInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ExclusiveStartShardId")
    public String exclusiveStartShardId;
    public DescribeStreamInput withExclusiveStartShardId(String exclusiveStartShardId) {
        this.exclusiveStartShardId = exclusiveStartShardId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Limit")
    public Long limit;
    public DescribeStreamInput withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @JsonProperty("StreamName")
    public String streamName;
    public DescribeStreamInput withStreamName(String streamName) {
        this.streamName = streamName;
        return this;
    }
}