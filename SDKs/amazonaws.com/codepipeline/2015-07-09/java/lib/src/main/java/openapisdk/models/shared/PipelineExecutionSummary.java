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
 * PipelineExecutionSummary
 * Summary information about a pipeline execution.
**/
public class PipelineExecutionSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("lastUpdateTime")
    public OffsetDateTime lastUpdateTime;
    public PipelineExecutionSummary withLastUpdateTime(OffsetDateTime lastUpdateTime) {
        this.lastUpdateTime = lastUpdateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pipelineExecutionId")
    public String pipelineExecutionId;
    public PipelineExecutionSummary withPipelineExecutionId(String pipelineExecutionId) {
        this.pipelineExecutionId = pipelineExecutionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceRevisions")
    public SourceRevision[] sourceRevisions;
    public PipelineExecutionSummary withSourceRevisions(SourceRevision[] sourceRevisions) {
        this.sourceRevisions = sourceRevisions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("startTime")
    public OffsetDateTime startTime;
    public PipelineExecutionSummary withStartTime(OffsetDateTime startTime) {
        this.startTime = startTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public PipelineExecutionStatusEnum status;
    public PipelineExecutionSummary withStatus(PipelineExecutionStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stopTrigger")
    public StopExecutionTrigger stopTrigger;
    public PipelineExecutionSummary withStopTrigger(StopExecutionTrigger stopTrigger) {
        this.stopTrigger = stopTrigger;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("trigger")
    public ExecutionTrigger trigger;
    public PipelineExecutionSummary withTrigger(ExecutionTrigger trigger) {
        this.trigger = trigger;
        return this;
    }
}