package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LogGroup
 * Represents a log group.
**/
public class LogGroup {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("arn")
    public String arn;
    public LogGroup withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creationTime")
    public Long creationTime;
    public LogGroup withCreationTime(Long creationTime) {
        this.creationTime = creationTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kmsKeyId")
    public String kmsKeyId;
    public LogGroup withKmsKeyId(String kmsKeyId) {
        this.kmsKeyId = kmsKeyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("logGroupName")
    public String logGroupName;
    public LogGroup withLogGroupName(String logGroupName) {
        this.logGroupName = logGroupName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metricFilterCount")
    public Long metricFilterCount;
    public LogGroup withMetricFilterCount(Long metricFilterCount) {
        this.metricFilterCount = metricFilterCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("retentionInDays")
    public Long retentionInDays;
    public LogGroup withRetentionInDays(Long retentionInDays) {
        this.retentionInDays = retentionInDays;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("storedBytes")
    public Long storedBytes;
    public LogGroup withStoredBytes(Long storedBytes) {
        this.storedBytes = storedBytes;
        return this;
    }
}