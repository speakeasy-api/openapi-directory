package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class StopPipelineExecutionInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("abandon")
    public Boolean abandon;
    public StopPipelineExecutionInput withAbandon(Boolean abandon) {
        this.abandon = abandon;
        return this;
    }
    @JsonProperty("pipelineExecutionId")
    public String pipelineExecutionId;
    public StopPipelineExecutionInput withPipelineExecutionId(String pipelineExecutionId) {
        this.pipelineExecutionId = pipelineExecutionId;
        return this;
    }
    @JsonProperty("pipelineName")
    public String pipelineName;
    public StopPipelineExecutionInput withPipelineName(String pipelineName) {
        this.pipelineName = pipelineName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reason")
    public String reason;
    public StopPipelineExecutionInput withReason(String reason) {
        this.reason = reason;
        return this;
    }
}