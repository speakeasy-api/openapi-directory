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
 * TaskRun
 * The sampling parameters that are associated with the machine learning transform.
**/
public class TaskRun {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CompletedOn")
    public OffsetDateTime completedOn;
    public TaskRun withCompletedOn(OffsetDateTime completedOn) {
        this.completedOn = completedOn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ErrorString")
    public String errorString;
    public TaskRun withErrorString(String errorString) {
        this.errorString = errorString;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ExecutionTime")
    public Long executionTime;
    public TaskRun withExecutionTime(Long executionTime) {
        this.executionTime = executionTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("LastModifiedOn")
    public OffsetDateTime lastModifiedOn;
    public TaskRun withLastModifiedOn(OffsetDateTime lastModifiedOn) {
        this.lastModifiedOn = lastModifiedOn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LogGroupName")
    public String logGroupName;
    public TaskRun withLogGroupName(String logGroupName) {
        this.logGroupName = logGroupName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Properties")
    public TaskRunProperties properties;
    public TaskRun withProperties(TaskRunProperties properties) {
        this.properties = properties;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("StartedOn")
    public OffsetDateTime startedOn;
    public TaskRun withStartedOn(OffsetDateTime startedOn) {
        this.startedOn = startedOn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public TaskStatusTypeEnum status;
    public TaskRun withStatus(TaskStatusTypeEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TaskRunId")
    public String taskRunId;
    public TaskRun withTaskRunId(String taskRunId) {
        this.taskRunId = taskRunId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TransformId")
    public String transformId;
    public TaskRun withTransformId(String transformId) {
        this.transformId = transformId;
        return this;
    }
}