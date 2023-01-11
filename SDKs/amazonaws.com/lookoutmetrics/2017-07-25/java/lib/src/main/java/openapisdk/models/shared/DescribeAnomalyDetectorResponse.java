package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class DescribeAnomalyDetectorResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AnomalyDetectorArn")
    public String anomalyDetectorArn;
    public DescribeAnomalyDetectorResponse withAnomalyDetectorArn(String anomalyDetectorArn) {
        this.anomalyDetectorArn = anomalyDetectorArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AnomalyDetectorConfig")
    public AnomalyDetectorConfigSummary anomalyDetectorConfig;
    public DescribeAnomalyDetectorResponse withAnomalyDetectorConfig(AnomalyDetectorConfigSummary anomalyDetectorConfig) {
        this.anomalyDetectorConfig = anomalyDetectorConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AnomalyDetectorDescription")
    public String anomalyDetectorDescription;
    public DescribeAnomalyDetectorResponse withAnomalyDetectorDescription(String anomalyDetectorDescription) {
        this.anomalyDetectorDescription = anomalyDetectorDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AnomalyDetectorName")
    public String anomalyDetectorName;
    public DescribeAnomalyDetectorResponse withAnomalyDetectorName(String anomalyDetectorName) {
        this.anomalyDetectorName = anomalyDetectorName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CreationTime")
    public OffsetDateTime creationTime;
    public DescribeAnomalyDetectorResponse withCreationTime(OffsetDateTime creationTime) {
        this.creationTime = creationTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FailureReason")
    public String failureReason;
    public DescribeAnomalyDetectorResponse withFailureReason(String failureReason) {
        this.failureReason = failureReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("KmsKeyArn")
    public String kmsKeyArn;
    public DescribeAnomalyDetectorResponse withKmsKeyArn(String kmsKeyArn) {
        this.kmsKeyArn = kmsKeyArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("LastModificationTime")
    public OffsetDateTime lastModificationTime;
    public DescribeAnomalyDetectorResponse withLastModificationTime(OffsetDateTime lastModificationTime) {
        this.lastModificationTime = lastModificationTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public AnomalyDetectorStatusEnum status;
    public DescribeAnomalyDetectorResponse withStatus(AnomalyDetectorStatusEnum status) {
        this.status = status;
        return this;
    }
}