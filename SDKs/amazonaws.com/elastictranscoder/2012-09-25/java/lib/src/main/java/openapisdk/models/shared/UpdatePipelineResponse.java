package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdatePipelineResponse
 * When you update a pipeline, Elastic Transcoder returns the values that you specified in the request.
**/
public class UpdatePipelineResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Pipeline")
    public Pipeline pipeline;
    public UpdatePipelineResponse withPipeline(Pipeline pipeline) {
        this.pipeline = pipeline;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Warnings")
    public Warning[] warnings;
    public UpdatePipelineResponse withWarnings(Warning[] warnings) {
        this.warnings = warnings;
        return this;
    }
}