package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * UpdatePipelineInput
 * Represents the input of an <code>UpdatePipeline</code> action.
**/
public class UpdatePipelineInput {
    @JsonProperty("pipeline")
    public PipelineDeclaration pipeline;
    public UpdatePipelineInput withPipeline(PipelineDeclaration pipeline) {
        this.pipeline = pipeline;
        return this;
    }
}