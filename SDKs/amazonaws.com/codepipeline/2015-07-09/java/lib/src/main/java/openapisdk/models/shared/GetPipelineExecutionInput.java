package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetPipelineExecutionInput
 * Represents the input of a <code>GetPipelineExecution</code> action.
**/
public class GetPipelineExecutionInput {
    @JsonProperty("pipelineExecutionId")
    public String pipelineExecutionId;
    public GetPipelineExecutionInput withPipelineExecutionId(String pipelineExecutionId) {
        this.pipelineExecutionId = pipelineExecutionId;
        return this;
    }
    @JsonProperty("pipelineName")
    public String pipelineName;
    public GetPipelineExecutionInput withPipelineName(String pipelineName) {
        this.pipelineName = pipelineName;
        return this;
    }
}