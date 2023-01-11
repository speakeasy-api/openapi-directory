package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreatePipelineInput
 * Represents the input of a <code>CreatePipeline</code> action.
**/
public class CreatePipelineInput {
    @JsonProperty("pipeline")
    public PipelineDeclaration pipeline;
    public CreatePipelineInput withPipeline(PipelineDeclaration pipeline) {
        this.pipeline = pipeline;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public Tag[] tags;
    public CreatePipelineInput withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
}