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
 * JobRun
 * Contains information about a job run.
**/
public class JobRun {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AllocatedCapacity")
    public java.util.Map<String, Object> allocatedCapacity;
    public JobRun withAllocatedCapacity(java.util.Map<String, Object> allocatedCapacity) {
        this.allocatedCapacity = allocatedCapacity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Arguments")
    public java.util.Map<String, String> arguments;
    public JobRun withArguments(java.util.Map<String, String> arguments) {
        this.arguments = arguments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Attempt")
    public Long attempt;
    public JobRun withAttempt(Long attempt) {
        this.attempt = attempt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CompletedOn")
    public OffsetDateTime completedOn;
    public JobRun withCompletedOn(OffsetDateTime completedOn) {
        this.completedOn = completedOn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ErrorMessage")
    public String errorMessage;
    public JobRun withErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ExecutionTime")
    public Long executionTime;
    public JobRun withExecutionTime(Long executionTime) {
        this.executionTime = executionTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GlueVersion")
    public String glueVersion;
    public JobRun withGlueVersion(String glueVersion) {
        this.glueVersion = glueVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Id")
    public String id;
    public JobRun withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("JobName")
    public String jobName;
    public JobRun withJobName(String jobName) {
        this.jobName = jobName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("JobRunState")
    public JobRunStateEnum jobRunState;
    public JobRun withJobRunState(JobRunStateEnum jobRunState) {
        this.jobRunState = jobRunState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("LastModifiedOn")
    public OffsetDateTime lastModifiedOn;
    public JobRun withLastModifiedOn(OffsetDateTime lastModifiedOn) {
        this.lastModifiedOn = lastModifiedOn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LogGroupName")
    public String logGroupName;
    public JobRun withLogGroupName(String logGroupName) {
        this.logGroupName = logGroupName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxCapacity")
    public Double maxCapacity;
    public JobRun withMaxCapacity(Double maxCapacity) {
        this.maxCapacity = maxCapacity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NotificationProperty")
    public NotificationProperty notificationProperty;
    public JobRun withNotificationProperty(NotificationProperty notificationProperty) {
        this.notificationProperty = notificationProperty;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NumberOfWorkers")
    public Long numberOfWorkers;
    public JobRun withNumberOfWorkers(Long numberOfWorkers) {
        this.numberOfWorkers = numberOfWorkers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PredecessorRuns")
    public Predecessor[] predecessorRuns;
    public JobRun withPredecessorRuns(Predecessor[] predecessorRuns) {
        this.predecessorRuns = predecessorRuns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PreviousRunId")
    public String previousRunId;
    public JobRun withPreviousRunId(String previousRunId) {
        this.previousRunId = previousRunId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SecurityConfiguration")
    public String securityConfiguration;
    public JobRun withSecurityConfiguration(String securityConfiguration) {
        this.securityConfiguration = securityConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("StartedOn")
    public OffsetDateTime startedOn;
    public JobRun withStartedOn(OffsetDateTime startedOn) {
        this.startedOn = startedOn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Timeout")
    public Long timeout;
    public JobRun withTimeout(Long timeout) {
        this.timeout = timeout;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TriggerName")
    public String triggerName;
    public JobRun withTriggerName(String triggerName) {
        this.triggerName = triggerName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("WorkerType")
    public WorkerTypeEnum workerType;
    public JobRun withWorkerType(WorkerTypeEnum workerType) {
        this.workerType = workerType;
        return this;
    }
}