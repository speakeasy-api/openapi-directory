package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetPipelineExecutionOutput
 * Represents the output of a <code>GetPipelineExecution</code> action.
**/
public class GetPipelineExecutionOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pipelineExecution")
    public PipelineExecution pipelineExecution;
    public GetPipelineExecutionOutput withPipelineExecution(PipelineExecution pipelineExecution) {
        this.pipelineExecution = pipelineExecution;
        return this;
    }
}