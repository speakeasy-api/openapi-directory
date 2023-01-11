package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ExportTask
 * Represents an export task.
**/
public class ExportTask {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destination")
    public String destination;
    public ExportTask withDestination(String destination) {
        this.destination = destination;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destinationPrefix")
    public String destinationPrefix;
    public ExportTask withDestinationPrefix(String destinationPrefix) {
        this.destinationPrefix = destinationPrefix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("executionInfo")
    public ExportTaskExecutionInfo executionInfo;
    public ExportTask withExecutionInfo(ExportTaskExecutionInfo executionInfo) {
        this.executionInfo = executionInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("from")
    public Long from;
    public ExportTask withFrom(Long from) {
        this.from = from;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("logGroupName")
    public String logGroupName;
    public ExportTask withLogGroupName(String logGroupName) {
        this.logGroupName = logGroupName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public ExportTaskStatus status;
    public ExportTask withStatus(ExportTaskStatus status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taskId")
    public String taskId;
    public ExportTask withTaskId(String taskId) {
        this.taskId = taskId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taskName")
    public String taskName;
    public ExportTask withTaskName(String taskName) {
        this.taskName = taskName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("to")
    public Long to;
    public ExportTask withTo(Long to) {
        this.to = to;
        return this;
    }
}