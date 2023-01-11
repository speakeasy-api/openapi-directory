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
 * ExecutionRecord
 *  Specifies information about the past flow run instances for a given flow. 
**/
public class ExecutionRecord {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("dataPullEndTime")
    public OffsetDateTime dataPullEndTime;
    public ExecutionRecord withDataPullEndTime(OffsetDateTime dataPullEndTime) {
        this.dataPullEndTime = dataPullEndTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("dataPullStartTime")
    public OffsetDateTime dataPullStartTime;
    public ExecutionRecord withDataPullStartTime(OffsetDateTime dataPullStartTime) {
        this.dataPullStartTime = dataPullStartTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("executionId")
    public String executionId;
    public ExecutionRecord withExecutionId(String executionId) {
        this.executionId = executionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("executionResult")
    public ExecutionResult executionResult;
    public ExecutionRecord withExecutionResult(ExecutionResult executionResult) {
        this.executionResult = executionResult;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("executionStatus")
    public ExecutionStatusEnum executionStatus;
    public ExecutionRecord withExecutionStatus(ExecutionStatusEnum executionStatus) {
        this.executionStatus = executionStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("lastUpdatedAt")
    public OffsetDateTime lastUpdatedAt;
    public ExecutionRecord withLastUpdatedAt(OffsetDateTime lastUpdatedAt) {
        this.lastUpdatedAt = lastUpdatedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("startedAt")
    public OffsetDateTime startedAt;
    public ExecutionRecord withStartedAt(OffsetDateTime startedAt) {
        this.startedAt = startedAt;
        return this;
    }
}