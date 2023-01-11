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
 * JobExecution
 * The job execution object represents the execution of a job on a particular device.
**/
public class JobExecution {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("approximateSecondsBeforeTimedOut")
    public Long approximateSecondsBeforeTimedOut;
    public JobExecution withApproximateSecondsBeforeTimedOut(Long approximateSecondsBeforeTimedOut) {
        this.approximateSecondsBeforeTimedOut = approximateSecondsBeforeTimedOut;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("executionNumber")
    public Long executionNumber;
    public JobExecution withExecutionNumber(Long executionNumber) {
        this.executionNumber = executionNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("forceCanceled")
    public Boolean forceCanceled;
    public JobExecution withForceCanceled(Boolean forceCanceled) {
        this.forceCanceled = forceCanceled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jobId")
    public String jobId;
    public JobExecution withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("lastUpdatedAt")
    public OffsetDateTime lastUpdatedAt;
    public JobExecution withLastUpdatedAt(OffsetDateTime lastUpdatedAt) {
        this.lastUpdatedAt = lastUpdatedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("queuedAt")
    public OffsetDateTime queuedAt;
    public JobExecution withQueuedAt(OffsetDateTime queuedAt) {
        this.queuedAt = queuedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("startedAt")
    public OffsetDateTime startedAt;
    public JobExecution withStartedAt(OffsetDateTime startedAt) {
        this.startedAt = startedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public JobExecutionStatusEnum status;
    public JobExecution withStatus(JobExecutionStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("statusDetails")
    public JobExecutionStatusDetails statusDetails;
    public JobExecution withStatusDetails(JobExecutionStatusDetails statusDetails) {
        this.statusDetails = statusDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thingArn")
    public String thingArn;
    public JobExecution withThingArn(String thingArn) {
        this.thingArn = thingArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("versionNumber")
    public Long versionNumber;
    public JobExecution withVersionNumber(Long versionNumber) {
        this.versionNumber = versionNumber;
        return this;
    }
}