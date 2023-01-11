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
 * QuantumTaskSummary
 * Includes information about a quantum task.
**/
public class QuantumTaskSummary {
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("createdAt")
    public OffsetDateTime createdAt;
    public QuantumTaskSummary withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonProperty("deviceArn")
    public String deviceArn;
    public QuantumTaskSummary withDeviceArn(String deviceArn) {
        this.deviceArn = deviceArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("endedAt")
    public OffsetDateTime endedAt;
    public QuantumTaskSummary withEndedAt(OffsetDateTime endedAt) {
        this.endedAt = endedAt;
        return this;
    }
    @JsonProperty("outputS3Bucket")
    public String outputS3Bucket;
    public QuantumTaskSummary withOutputS3Bucket(String outputS3Bucket) {
        this.outputS3Bucket = outputS3Bucket;
        return this;
    }
    @JsonProperty("outputS3Directory")
    public String outputS3Directory;
    public QuantumTaskSummary withOutputS3Directory(String outputS3Directory) {
        this.outputS3Directory = outputS3Directory;
        return this;
    }
    @JsonProperty("quantumTaskArn")
    public String quantumTaskArn;
    public QuantumTaskSummary withQuantumTaskArn(String quantumTaskArn) {
        this.quantumTaskArn = quantumTaskArn;
        return this;
    }
    @JsonProperty("shots")
    public Long shots;
    public QuantumTaskSummary withShots(Long shots) {
        this.shots = shots;
        return this;
    }
    @JsonProperty("status")
    public QuantumTaskStatusEnum status;
    public QuantumTaskSummary withStatus(QuantumTaskStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public QuantumTaskSummary withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
}