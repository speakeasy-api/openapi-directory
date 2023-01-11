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
 * StreamDescriptionSummary
 * Represents the output for <a>DescribeStreamSummary</a> 
**/
public class StreamDescriptionSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConsumerCount")
    public Long consumerCount;
    public StreamDescriptionSummary withConsumerCount(Long consumerCount) {
        this.consumerCount = consumerCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EncryptionType")
    public EncryptionTypeEnum encryptionType;
    public StreamDescriptionSummary withEncryptionType(EncryptionTypeEnum encryptionType) {
        this.encryptionType = encryptionType;
        return this;
    }
    @JsonProperty("EnhancedMonitoring")
    public EnhancedMetrics[] enhancedMonitoring;
    public StreamDescriptionSummary withEnhancedMonitoring(EnhancedMetrics[] enhancedMonitoring) {
        this.enhancedMonitoring = enhancedMonitoring;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("KeyId")
    public String keyId;
    public StreamDescriptionSummary withKeyId(String keyId) {
        this.keyId = keyId;
        return this;
    }
    @JsonProperty("OpenShardCount")
    public Long openShardCount;
    public StreamDescriptionSummary withOpenShardCount(Long openShardCount) {
        this.openShardCount = openShardCount;
        return this;
    }
    @JsonProperty("RetentionPeriodHours")
    public Long retentionPeriodHours;
    public StreamDescriptionSummary withRetentionPeriodHours(Long retentionPeriodHours) {
        this.retentionPeriodHours = retentionPeriodHours;
        return this;
    }
    @JsonProperty("StreamARN")
    public String streamARN;
    public StreamDescriptionSummary withStreamArn(String streamARN) {
        this.streamARN = streamARN;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("StreamCreationTimestamp")
    public OffsetDateTime streamCreationTimestamp;
    public StreamDescriptionSummary withStreamCreationTimestamp(OffsetDateTime streamCreationTimestamp) {
        this.streamCreationTimestamp = streamCreationTimestamp;
        return this;
    }
    @JsonProperty("StreamName")
    public String streamName;
    public StreamDescriptionSummary withStreamName(String streamName) {
        this.streamName = streamName;
        return this;
    }
    @JsonProperty("StreamStatus")
    public StreamStatusEnum streamStatus;
    public StreamDescriptionSummary withStreamStatus(StreamStatusEnum streamStatus) {
        this.streamStatus = streamStatus;
        return this;
    }
}