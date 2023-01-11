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
 * AutoScalingConfiguration
 * <p>Describes an AWS App Runner automatic scaling configuration resource. Multiple revisions of a configuration have the same <code>AutoScalingConfigurationName</code> and different <code>AutoScalingConfigurationRevision</code> values.</p> <p>A higher <code>MinSize</code> increases the spread of your App Runner service over more Availability Zones in the AWS Region. The tradeoff is a higher minimal cost.</p> <p>A lower <code>MaxSize</code> controls your cost. The tradeoff is lower responsiveness during peak demand.</p>
**/
public class AutoScalingConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AutoScalingConfigurationArn")
    public String autoScalingConfigurationArn;
    public AutoScalingConfiguration withAutoScalingConfigurationArn(String autoScalingConfigurationArn) {
        this.autoScalingConfigurationArn = autoScalingConfigurationArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AutoScalingConfigurationName")
    public String autoScalingConfigurationName;
    public AutoScalingConfiguration withAutoScalingConfigurationName(String autoScalingConfigurationName) {
        this.autoScalingConfigurationName = autoScalingConfigurationName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AutoScalingConfigurationRevision")
    public Long autoScalingConfigurationRevision;
    public AutoScalingConfiguration withAutoScalingConfigurationRevision(Long autoScalingConfigurationRevision) {
        this.autoScalingConfigurationRevision = autoScalingConfigurationRevision;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CreatedAt")
    public OffsetDateTime createdAt;
    public AutoScalingConfiguration withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("DeletedAt")
    public OffsetDateTime deletedAt;
    public AutoScalingConfiguration withDeletedAt(OffsetDateTime deletedAt) {
        this.deletedAt = deletedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Latest")
    public Boolean latest;
    public AutoScalingConfiguration withLatest(Boolean latest) {
        this.latest = latest;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxConcurrency")
    public Long maxConcurrency;
    public AutoScalingConfiguration withMaxConcurrency(Long maxConcurrency) {
        this.maxConcurrency = maxConcurrency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxSize")
    public Long maxSize;
    public AutoScalingConfiguration withMaxSize(Long maxSize) {
        this.maxSize = maxSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MinSize")
    public Long minSize;
    public AutoScalingConfiguration withMinSize(Long minSize) {
        this.minSize = minSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public AutoScalingConfigurationStatusEnum status;
    public AutoScalingConfiguration withStatus(AutoScalingConfigurationStatusEnum status) {
        this.status = status;
        return this;
    }
}