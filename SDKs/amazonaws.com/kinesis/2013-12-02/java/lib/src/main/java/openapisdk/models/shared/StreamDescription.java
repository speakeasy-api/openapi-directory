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
 * StreamDescription
 * Represents the output for <a>DescribeStream</a>.
**/
public class StreamDescription {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EncryptionType")
    public EncryptionTypeEnum encryptionType;
    public StreamDescription withEncryptionType(EncryptionTypeEnum encryptionType) {
        this.encryptionType = encryptionType;
        return this;
    }
    @JsonProperty("EnhancedMonitoring")
    public EnhancedMetrics[] enhancedMonitoring;
    public StreamDescription withEnhancedMonitoring(EnhancedMetrics[] enhancedMonitoring) {
        this.enhancedMonitoring = enhancedMonitoring;
        return this;
    }
    @JsonProperty("HasMoreShards")
    public Boolean hasMoreShards;
    public StreamDescription withHasMoreShards(Boolean hasMoreShards) {
        this.hasMoreShards = hasMoreShards;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("KeyId")
    public String keyId;
    public StreamDescription withKeyId(String keyId) {
        this.keyId = keyId;
        return this;
    }
    @JsonProperty("RetentionPeriodHours")
    public Long retentionPeriodHours;
    public StreamDescription withRetentionPeriodHours(Long retentionPeriodHours) {
        this.retentionPeriodHours = retentionPeriodHours;
        return this;
    }
    @JsonProperty("Shards")
    public Shard[] shards;
    public StreamDescription withShards(Shard[] shards) {
        this.shards = shards;
        return this;
    }
    @JsonProperty("StreamARN")
    public String streamARN;
    public StreamDescription withStreamArn(String streamARN) {
        this.streamARN = streamARN;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("StreamCreationTimestamp")
    public OffsetDateTime streamCreationTimestamp;
    public StreamDescription withStreamCreationTimestamp(OffsetDateTime streamCreationTimestamp) {
        this.streamCreationTimestamp = streamCreationTimestamp;
        return this;
    }
    @JsonProperty("StreamName")
    public String streamName;
    public StreamDescription withStreamName(String streamName) {
        this.streamName = streamName;
        return this;
    }
    @JsonProperty("StreamStatus")
    public StreamStatusEnum streamStatus;
    public StreamDescription withStreamStatus(StreamStatusEnum streamStatus) {
        this.streamStatus = streamStatus;
        return this;
    }
}