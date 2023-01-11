package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class ListShardsInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ExclusiveStartShardId")
    public String exclusiveStartShardId;
    public ListShardsInput withExclusiveStartShardId(String exclusiveStartShardId) {
        this.exclusiveStartShardId = exclusiveStartShardId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxResults")
    public Long maxResults;
    public ListShardsInput withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListShardsInput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ShardFilter")
    public ShardFilter shardFilter;
    public ListShardsInput withShardFilter(ShardFilter shardFilter) {
        this.shardFilter = shardFilter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("StreamCreationTimestamp")
    public OffsetDateTime streamCreationTimestamp;
    public ListShardsInput withStreamCreationTimestamp(OffsetDateTime streamCreationTimestamp) {
        this.streamCreationTimestamp = streamCreationTimestamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StreamName")
    public String streamName;
    public ListShardsInput withStreamName(String streamName) {
        this.streamName = streamName;
        return this;
    }
}