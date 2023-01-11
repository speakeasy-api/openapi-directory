package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class StopPipelineExecutionOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pipelineExecutionId")
    public String pipelineExecutionId;
    public StopPipelineExecutionOutput withPipelineExecutionId(String pipelineExecutionId) {
        this.pipelineExecutionId = pipelineExecutionId;
        return this;
    }
}