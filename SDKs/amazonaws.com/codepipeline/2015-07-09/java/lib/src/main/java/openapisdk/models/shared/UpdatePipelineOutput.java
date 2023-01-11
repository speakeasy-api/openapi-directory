package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdatePipelineOutput
 * Represents the output of an <code>UpdatePipeline</code> action.
**/
public class UpdatePipelineOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pipeline")
    public PipelineDeclaration pipeline;
    public UpdatePipelineOutput withPipeline(PipelineDeclaration pipeline) {
        this.pipeline = pipeline;
        return this;
    }
}