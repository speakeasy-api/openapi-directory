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
 * DescribeTaskExecutionResponse
 * DescribeTaskExecutionResponse
**/
public class DescribeTaskExecutionResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BytesTransferred")
    public Long bytesTransferred;
    public DescribeTaskExecutionResponse withBytesTransferred(Long bytesTransferred) {
        this.bytesTransferred = bytesTransferred;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BytesWritten")
    public Long bytesWritten;
    public DescribeTaskExecutionResponse withBytesWritten(Long bytesWritten) {
        this.bytesWritten = bytesWritten;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EstimatedBytesToTransfer")
    public Long estimatedBytesToTransfer;
    public DescribeTaskExecutionResponse withEstimatedBytesToTransfer(Long estimatedBytesToTransfer) {
        this.estimatedBytesToTransfer = estimatedBytesToTransfer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EstimatedFilesToTransfer")
    public Long estimatedFilesToTransfer;
    public DescribeTaskExecutionResponse withEstimatedFilesToTransfer(Long estimatedFilesToTransfer) {
        this.estimatedFilesToTransfer = estimatedFilesToTransfer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Excludes")
    public FilterRule[] excludes;
    public DescribeTaskExecutionResponse withExcludes(FilterRule[] excludes) {
        this.excludes = excludes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FilesTransferred")
    public Long filesTransferred;
    public DescribeTaskExecutionResponse withFilesTransferred(Long filesTransferred) {
        this.filesTransferred = filesTransferred;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Includes")
    public FilterRule[] includes;
    public DescribeTaskExecutionResponse withIncludes(FilterRule[] includes) {
        this.includes = includes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Options")
    public Options options;
    public DescribeTaskExecutionResponse withOptions(Options options) {
        this.options = options;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Result")
    public TaskExecutionResultDetail result;
    public DescribeTaskExecutionResponse withResult(TaskExecutionResultDetail result) {
        this.result = result;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("StartTime")
    public OffsetDateTime startTime;
    public DescribeTaskExecutionResponse withStartTime(OffsetDateTime startTime) {
        this.startTime = startTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public TaskExecutionStatusEnum status;
    public DescribeTaskExecutionResponse withStatus(TaskExecutionStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TaskExecutionArn")
    public String taskExecutionArn;
    public DescribeTaskExecutionResponse withTaskExecutionArn(String taskExecutionArn) {
        this.taskExecutionArn = taskExecutionArn;
        return this;
    }
}