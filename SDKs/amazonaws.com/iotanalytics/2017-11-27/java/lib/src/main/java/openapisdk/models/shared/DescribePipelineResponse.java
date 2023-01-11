package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribePipelineResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pipeline")
    public Pipeline pipeline;
    public DescribePipelineResponse withPipeline(Pipeline pipeline) {
        this.pipeline = pipeline;
        return this;
    }
}