package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreatePipelineResponse
 * When you create a pipeline, Elastic Transcoder returns the values that you specified in the request.
**/
public class CreatePipelineResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Pipeline")
    public Pipeline pipeline;
    public CreatePipelineResponse withPipeline(Pipeline pipeline) {
        this.pipeline = pipeline;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Warnings")
    public Warning[] warnings;
    public CreatePipelineResponse withWarnings(Warning[] warnings) {
        this.warnings = warnings;
        return this;
    }
}