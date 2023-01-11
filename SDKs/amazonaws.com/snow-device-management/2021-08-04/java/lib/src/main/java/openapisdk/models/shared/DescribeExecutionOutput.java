package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class DescribeExecutionOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("executionId")
    public String executionId;
    public DescribeExecutionOutput withExecutionId(String executionId) {
        this.executionId = executionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("lastUpdatedAt")
    public OffsetDateTime lastUpdatedAt;
    public DescribeExecutionOutput withLastUpdatedAt(OffsetDateTime lastUpdatedAt) {
        this.lastUpdatedAt = lastUpdatedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("managedDeviceId")
    public String managedDeviceId;
    public DescribeExecutionOutput withManagedDeviceId(String managedDeviceId) {
        this.managedDeviceId = managedDeviceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("startedAt")
    public OffsetDateTime startedAt;
    public DescribeExecutionOutput withStartedAt(OffsetDateTime startedAt) {
        this.startedAt = startedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public ExecutionStateEnum state;
    public DescribeExecutionOutput withState(ExecutionStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taskId")
    public String taskId;
    public DescribeExecutionOutput withTaskId(String taskId) {
        this.taskId = taskId;
        return this;
    }
}