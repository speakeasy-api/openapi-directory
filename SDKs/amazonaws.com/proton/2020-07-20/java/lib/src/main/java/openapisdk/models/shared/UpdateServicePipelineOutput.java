package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateServicePipelineOutput {
    @JsonProperty("pipeline")
    public ServicePipeline pipeline;
    public UpdateServicePipelineOutput withPipeline(ServicePipeline pipeline) {
        this.pipeline = pipeline;
        return this;
    }
}