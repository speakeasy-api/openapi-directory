package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetPipelineOutput
 * Represents the output of a <code>GetPipeline</code> action.
**/
public class GetPipelineOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadata")
    public PipelineMetadata metadata;
    public GetPipelineOutput withMetadata(PipelineMetadata metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pipeline")
    public PipelineDeclaration pipeline;
    public GetPipelineOutput withPipeline(PipelineDeclaration pipeline) {
        this.pipeline = pipeline;
        return this;
    }
}