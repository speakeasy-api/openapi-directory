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
 * TaskRunFilterCriteria
 * The criteria that are used to filter the task runs for the machine learning transform.
**/
public class TaskRunFilterCriteria {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("StartedAfter")
    public OffsetDateTime startedAfter;
    public TaskRunFilterCriteria withStartedAfter(OffsetDateTime startedAfter) {
        this.startedAfter = startedAfter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("StartedBefore")
    public OffsetDateTime startedBefore;
    public TaskRunFilterCriteria withStartedBefore(OffsetDateTime startedBefore) {
        this.startedBefore = startedBefore;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public TaskStatusTypeEnum status;
    public TaskRunFilterCriteria withStatus(TaskStatusTypeEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TaskRunType")
    public TaskTypeEnum taskRunType;
    public TaskRunFilterCriteria withTaskRunType(TaskTypeEnum taskRunType) {
        this.taskRunType = taskRunType;
        return this;
    }
}