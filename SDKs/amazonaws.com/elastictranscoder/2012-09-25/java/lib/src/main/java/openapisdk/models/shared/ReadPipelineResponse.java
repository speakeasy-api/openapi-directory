package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReadPipelineResponse
 * The <code>ReadPipelineResponse</code> structure.
**/
public class ReadPipelineResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Pipeline")
    public Pipeline pipeline;
    public ReadPipelineResponse withPipeline(Pipeline pipeline) {
        this.pipeline = pipeline;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Warnings")
    public Warning[] warnings;
    public ReadPipelineResponse withWarnings(Warning[] warnings) {
        this.warnings = warnings;
        return this;
    }
}